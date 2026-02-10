# Authentication Service

## Overview
Complete authentication service for Multi-Tenant CBT Platform. Handles admin registration/login and student exam access with JWT tokens.

## Features
- **Admin Authentication** - Full registration/login with 7-day JWT tokens
- **Student Exam Access** - Temporary 2-hour tokens using exam codes
- **Password Security** - bcrypt hashing with salt rounds
- **Multi-tenancy Ready** - Tenant isolation built-in
- **TypeScript** - Full type safety

## Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Set environment variables
cp .env.example .env

# 3. Run test server
npx tsx integration-test.ts

# 4. Test endpoints
# GET  http://localhost:3001/auth/health
# POST http://localhost:3001/auth/admin/register