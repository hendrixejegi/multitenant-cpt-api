import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  tenant: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
  totalQuestions: number;
  passingScore: number;
  duration: number; // in minutes
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tenant: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    totalQuestions: {
      type: Number,
      default: 0,
    },
    passingScore: {
      type: Number,
      default: 70,
      min: 0,
      max: 100,
    },
    duration: {
      type: Number,
      default: 60, // 60 minutes
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const Course = mongoose.model<ICourse>('Course', courseSchema);
