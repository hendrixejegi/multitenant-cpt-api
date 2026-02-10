// Simple test
console.log('Testing TypeScript setup...');

import { Router } from 'express';
const router = Router();
console.log('✅ Express import works!');

interface TestUser {
  id: string;
  email: string;
}

const user: TestUser = { id: '1', email: 'test@test.com' };
console.log('✅ TypeScript interfaces work!', user);