import { Response, NextFunction } from 'express';
import { User } from '../models';
import { AppError } from '../utils/error';
import { AuthRequest } from '../middlewares/auth';

export const getUserProfile = async (
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

    const user = await User.findById(req.user.id).populate('tenant');

    if (!user) {
      throw new AppError({
        status: 404,
        message: 'User not found',
        code: 'not_found',
      });
    }

    res.status(200).json({
      message: 'User profile retrieved',
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        tenant: user.tenant,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserProfile = async (
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

    const { firstName, lastName } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
      },
      { new: true, runValidators: true },
    );

    if (!user) {
      throw new AppError({
        status: 404,
        message: 'User not found',
        code: 'not_found',
      });
    }

    res.status(200).json({
      message: 'User profile updated',
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};
