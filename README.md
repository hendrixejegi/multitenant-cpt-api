# CBT Multi-Tenancy Authentication System

A robust authentication system for a multi-tenancy Computer-Based Testing (CBT) application built with Node.js, Express, TypeScript, and PostgreSQL.

## Features

- ✅ Multi-tenancy support with organization isolation
- ✅ Secure admin registration with atomic transactions
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Input validation and sanitization
- ✅ TypeScript for type safety
- ✅ RESTful API design
- ✅ Comprehensive error handling

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** Neon PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **Validation:** express-validator

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Neon PostgreSQL database

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cbt-auth-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   The `.env` file is already configured with your Neon database connection. Update the following if needed:
   
   - `JWT_SECRET`: Change to a secure random string in production
   - `PORT`: Change if you want to use a different port
   - `NODE_ENV`: Set to 'production' in production environment

4. **Set up the database**
   ```bash
   npm run db:setup
   ```
   
   This will create the necessary tables and indexes.

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`

## API Endpoints

### 1. Admin Registration
**Endpoint:** `POST /auth/register`

**Description:** Registers a new organization and creates the initial admin user. This is an atomic transaction that creates both the tenant and user records.

**Access:** Public

**Request Body:**
```json
{
  "organization_name": "ABC School",
  "subdomain": "abc-school",
  "email": "admin@abcschool.com",
  "password": "SecurePass123!",
  "first_name": "John",
  "last_name": "Doe"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Organization and admin user created successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "uuid",
      "tenant_id": "uuid",
      "email": "admin@abcschool.com",
      "first_name": "John",
      "last_name": "Doe",
      "role": "admin",
      "status": "active",
      "organization_name": "ABC School"
    }
  }
}
```

### 2. Admin Login
**Endpoint:** `POST /auth/login`

**Description:** Authenticates an admin user and returns a JWT token containing user_id, tenant_id, and role.

**Access:** Public

**Request Body:**
```json
{
  "email": "admin@abcschool.com",
  "password": "SecurePass123!"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "uuid",
      "tenant_id": "uuid",
      "email": "admin@abcschool.com",
      "first_name": "John",
      "last_name": "Doe",
      "role": "admin",
      "status": "active",
      "organization_name": "ABC School"
    }
  }
}
```

### 3. Get Current User
**Endpoint:** `GET /auth/me`

**Description:** Returns the currently authenticated admin's profile information.

**Access:** Private (Admin Token Required)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "User profile retrieved successfully",
  "data": {
    "id": "uuid",
    "tenant_id": "uuid",
    "email": "admin@abcschool.com",
    "first_name": "John",
    "last_name": "Doe",
    "role": "admin",
    "status": "active",
    "organization_name": "ABC School"
  }
}
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

The JWT token contains:
- `user_id`: User's unique identifier
- `tenant_id`: Organization's unique identifier
- `role`: User's role (admin)
- `email`: User's email address

## Database Schema

### Tenants Table
```sql
- id (UUID, Primary Key)
- organization_name (VARCHAR)
- subdomain (VARCHAR, Unique)
- status (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Users Table
```sql
- id (UUID, Primary Key)
- tenant_id (UUID, Foreign Key)
- email (VARCHAR)
- password_hash (VARCHAR)
- first_name (VARCHAR)
- last_name (VARCHAR)
- role (VARCHAR)
- status (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
- UNIQUE(tenant_id, email)
```

## Security Features

- **Password Requirements:**
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character

- **JWT Token:**
  - 7-day expiration (configurable)
  - Signed with secure secret
  - Contains minimal user information

- **Multi-tenancy:**
  - Data isolation per tenant
  - Unique email per tenant
  - Subdomain validation

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "ERROR_CODE"
}
```

Common error codes:
- `UNAUTHORIZED` (401): Missing or invalid token
- `FORBIDDEN` (403): Insufficient permissions
- `NOT_FOUND` (404): Resource not found
- `CONFLICT` (409): Duplicate resource
- `BAD_REQUEST` (400): Invalid input
- `INTERNAL_SERVER_ERROR` (500): Server error

## Testing with cURL

### Register a new organization
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "organization_name": "Test School",
    "subdomain": "test-school",
    "email": "admin@testschool.com",
    "password": "SecurePass123!",
    "first_name": "Jane",
    "last_name": "Smith"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@testschool.com",
    "password": "SecurePass123!"
  }'
```

### Get current user
```bash
curl -X GET http://localhost:3000/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Testing with Postman

1. Import the endpoints into Postman
2. For protected routes, add the token to Headers:
   - Key: `Authorization`
   - Value: `Bearer <your-token>`

## Project Structure

```
src/
├── controllers/       # Request handlers
├── database/          # Database connection and setup
├── middleware/        # Authentication and validation
├── routes/           # API route definitions
├── services/         # Business logic
├── types/            # TypeScript interfaces
├── utils/            # Helper functions
├── app.ts            # Express app configuration
└── server.ts         # Server entry point
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production server
- `npm run db:setup` - Set up database tables

## Production Deployment

1. Set `NODE_ENV=production` in environment variables
2. Change `JWT_SECRET` to a secure random string
3. Update `ALLOWED_ORIGINS` for CORS
4. Build the project: `npm run build`
5. Start the server: `npm start`

## License

MIT
