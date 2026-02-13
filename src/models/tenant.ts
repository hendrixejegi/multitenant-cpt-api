import mongoose, { Schema, Document } from 'mongoose';

export interface ITenant extends Document {
  name: string;
  slug: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const tenantSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

export const Tenant = mongoose.model<ITenant>('Tenant', tenantSchema);
