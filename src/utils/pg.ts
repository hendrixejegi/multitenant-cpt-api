import 'dotenv/config';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not configured');
}

// Neon requires SSL for remote connections.
const pgPool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

export { pgPool };
