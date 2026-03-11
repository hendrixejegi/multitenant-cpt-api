# Multi-tenant CBT API

Multi-tenant Computer-Based Testing (CBT) platform API built with Node.js, Express, TypeScript, and PostgreSQL.

## 🚀 Features

- Multi-tenant architecture for data isolation
- Role-based authentication (Admin/Student) with JWT
- Exam creation and management
- Multiple-choice question system
- Real-time exam attempts and scoring
- OpenAPI documentation

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with Passport.js
- **Validation**: Zod schemas
- **Documentation**: OpenAPI/Swagger

## 📦 Installation

```bash
git clone https://github.com/hendrixejegi/multitenant-cpt-api.git
cd multitenant-cpt-api
npm install
```

## 🚀 Usage

### Setup Environment

```bash
cp .env.example .env
```

Configure your `.env` file:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
JWT_SECRET=your-jwt-secret
```

### Database Setup

```bash
npx prisma generate
npx prisma migrate dev
```

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

### API Documentation

Visit `http://localhost:3000/api/docs` for interactive API documentation.

## 📚 API Endpoints

### Authentication

- `POST /auth/register` - Register tenant and admin
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user

### Tenants

- `GET /tenants/me` - Get current tenant

### Exams

- `GET /exams` - List all exams
- `POST /exams` - Create exam
- `GET /exams/{examId}` - Get exam by ID
- `PATCH /exams/{examId}` - Update exam
- `DELETE /exams/{examId}` - Delete exam
- `PATCH /exams/{examId}/publish` - Publish exam
- `PATCH /exams/{examId}/unpublish` - Unpublish exam

### Questions

- `GET /exams/{examId}/questions` - Get exam questions
- `POST /exams/{examId}/questions` - Add question to exam
- `PATCH /exams/{examId}/questions/{questionId}` - Update question
- `DELETE /exams/{examId}/questions/{questionId}` - Delete question

### Attempts

- `GET /attempts/{attemptId}` - Get attempt by ID

### Students

- `POST /students/exams/start` - Start exam
- `GET /students/attempts/{attemptId}` - Get student attempt
- `POST /students/attempts/{attemptId}/answer` - Submit answer
- `PATCH /students/attempts/{attemptId}/submit` - Submit attempt

### System

- `GET /health` - Health check

## 🔐 Authentication

Include JWT token in requests:

```bash
Authorization: Bearer <token>
```

**Roles**: ADMIN, STUDENT

## 🗄️ Database Schema

- **Tenant**: Organizations using the platform
- **User**: Admins and students
- **Exam**: Assessments with time limits
- **Question**: Multiple-choice questions
- **Attempt**: User exam attempts with scoring

## 📝 Environment Variables

| Variable       | Description           |
| -------------- | --------------------- |
| `PORT`         | Server port           |
| `NODE_ENV`     | Environment           |
| `DATABASE_URL` | PostgreSQL connection |
| `JWT_SECRET`   | JWT signing secret    |

## License

ISC License
