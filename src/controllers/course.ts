import { Response, NextFunction } from 'express';
import { Course } from '../models/course';
import { AppError } from '../utils/error';
import { AuthRequest } from '../middlewares/auth';

export const createCourse = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      throw new AppError({
        status: 401,
        message: 'Unauthorized',
        code: 'unauthorized',
      });
    }

    // Only admins can create courses
    if (req.user.role !== 'admin') {
      throw new AppError({
        status: 403,
        message: 'Only admins can create courses',
        code: 'bad_request',
      });
    }

    const { title, description, totalQuestions, passingScore, duration } =
      req.body;

    if (!title) {
      throw new AppError({
        status: 400,
        message: 'Course title is required',
        code: 'bad_request',
      });
    }

    const course = await Course.create({
      title,
      description,
      totalQuestions: totalQuestions || 0,
      passingScore: passingScore || 70,
      duration: duration || 60,
      tenant: req.user.tenantId,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: 'Course created successfully',
      course,
    });
  } catch (error) {
    next(error);
  }
};

export const getCourses = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      throw new AppError({
        status: 401,
        message: 'Unauthorized',
        code: 'unauthorized',
      });
    }

    const courses = await Course.find({
      tenant: req.user.tenantId,
      isActive: true,
    }).populate('createdBy', 'firstName lastName email');

    res.status(200).json({
      message: 'Courses retrieved',
      courses,
      total: courses.length,
    });
  } catch (error) {
    next(error);
  }
};

export const getCourseById = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      throw new AppError({
        status: 401,
        message: 'Unauthorized',
        code: 'unauthorized',
      });
    }

    const course = await Course.findById(req.params.id).populate(
      'createdBy',
      'firstName lastName email',
    );

    if (!course) {
      throw new AppError({
        status: 404,
        message: 'Course not found',
        code: 'not_found',
      });
    }

    // Verify course belongs to user's tenant
    if (course.tenant.toString() !== req.user.tenantId) {
      throw new AppError({
        status: 403,
        message: 'Access denied',
        code: 'bad_request',
      });
    }

    res.status(200).json({
      message: 'Course retrieved',
      course,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCourse = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      throw new AppError({
        status: 401,
        message: 'Unauthorized',
        code: 'unauthorized',
      });
    }

    // Only admins can update courses
    if (req.user.role !== 'admin') {
      throw new AppError({
        status: 403,
        message: 'Only admins can update courses',
        code: 'bad_request',
      });
    }

    const course = await Course.findById(req.params.id);

    if (!course) {
      throw new AppError({
        status: 404,
        message: 'Course not found',
        code: 'not_found',
      });
    }

    // Verify course belongs to user's tenant
    if (course.tenant.toString() !== req.user.tenantId) {
      throw new AppError({
        status: 403,
        message: 'Access denied',
        code: 'bad_request',
      });
    }

    const { title, description, totalQuestions, passingScore, duration } =
      req.body;

    course.title = title || course.title;
    course.description = description || course.description;
    course.totalQuestions = totalQuestions || course.totalQuestions;
    course.passingScore = passingScore || course.passingScore;
    course.duration = duration || course.duration;

    await course.save();

    res.status(200).json({
      message: 'Course updated successfully',
      course,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCourse = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      throw new AppError({
        status: 401,
        message: 'Unauthorized',
        code: 'unauthorized',
      });
    }

    // Only admins can delete courses
    if (req.user.role !== 'admin') {
      throw new AppError({
        status: 403,
        message: 'Only admins can delete courses',
        code: 'bad_request',
      });
    }

    const course = await Course.findById(req.params.id);

    if (!course) {
      throw new AppError({
        status: 404,
        message: 'Course not found',
        code: 'not_found',
      });
    }

    // Verify course belongs to user's tenant
    if (course.tenant.toString() !== req.user.tenantId) {
      throw new AppError({
        status: 403,
        message: 'Access denied',
        code: 'bad_request',
      });
    }

    // Soft delete - just mark as inactive
    course.isActive = false;
    await course.save();

    res.status(200).json({
      message: 'Course deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
