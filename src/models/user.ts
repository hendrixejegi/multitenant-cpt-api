import mongoose, { Schema, Document } from 'mongoose';
import bcryptjs from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  tenant: mongoose.Types.ObjectId;
  role: 'admin' | 'user';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    tenant: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

// Hash password before saving
userSchema.pre<IUser>('save', async function (this) {
  if (!this.isModified('password')) {
    return;
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const userDoc = this as unknown as { password: string };
    userDoc.password = await bcryptjs.hash(userDoc.password, salt);
  } catch (error) {
    throw error;
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (
  password: string,
): Promise<boolean> {
  return bcryptjs.compare(password, this.password);
};

export const User = mongoose.model<IUser>('User', userSchema);
