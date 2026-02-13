import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User, Tenant } from '../models';
import config from '../config';
import { AppError } from '../utils/error';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password, firstName, lastName, tenantName, tenantSlug } =
      req.body;

    // Validate input
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !tenantName ||
      !tenantSlug
    ) {
      throw new AppError({
        status: 400,
        message: 'Missing required fields',
        code: 'validation_error',
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new AppError({
        status: 409,
        message: 'User already exists',
        code: 'user_exists',
      });
    }

    // Check if tenant already exists
    let tenant = await Tenant.findOne({ slug: tenantSlug });
    if (!tenant) {
      tenant = await Tenant.create({
        name: tenantName,
        slug: tenantSlug,
        email,
      });
    }

    // Create user
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      tenant: tenant._id,
      role: 'admin', // First user is admin
    });

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        tenantId: tenant._id,
        role: user.role,
      },
      config.jwtSecret,
      { expiresIn: config.jwtExpire } as any,
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
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

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      throw new AppError({
        status: 400,
        message: 'Email and password required',
        code: 'validation_error',
      });
    }

    // Find user
    const user = await User.findOne({ email }).populate('tenant');
    if (!user) {
      throw new AppError({
        status: 401,
        message: 'Invalid credentials',
        code: 'invalid_credentials',
      });
    }

    // Compare password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new AppError({
        status: 401,
        message: 'Invalid credentials',
        code: 'invalid_credentials',
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        tenantId: user.tenant._id,
        role: user.role,
      },
      config.jwtSecret,
      { expiresIn: config.jwtExpire } as any,
    );

    res.status(200).json({
      message: 'Login successful',
      token,
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
