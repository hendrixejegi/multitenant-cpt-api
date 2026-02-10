// src/services/auth.service/test-auth-service.ts
console.log('🔧 Testing Authentication Service Structure...\n');

// Helper function to safely get error message
const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};

// Check imports
try {
  // Test admin controller
  const { registerAdmin } = require('./controllers/admin.auth.controller');
  console.log('✅ admin.auth.controller.ts imports correctly');
} catch (error) {
  console.log('❌ admin.auth.controller.ts import failed:', getErrorMessage(error));
}

try {
  // Test student controller
  const { enterExam } = require('./controllers/student.auth.controller');
  console.log('✅ student.auth.controller.ts imports correctly');
} catch (error) {
  console.log('❌ student.auth.controller.ts import failed:', getErrorMessage(error));
}

try {
  // Test services
  const { PasswordService } = require('./services/password.service');
  const { JwtService } = require('./services/jwt.service');
  console.log('✅ Services import correctly');
} catch (error) {
  console.log('❌ Services import failed:', getErrorMessage(error));
}

try {
  // Test middleware
  const { authenticateToken } = require('./middleware/auth.middleware');
  console.log('✅ Middleware imports correctly');
} catch (error) {
  console.log('❌ Middleware import failed:', getErrorMessage(error));
}

try {
  // Test main router
  const router = require('./index.ts').default;
  console.log('✅ Main router imports correctly');
} catch (error) {
  console.log('❌ Main router import failed:', getErrorMessage(error));
}

console.log('\n📋 File Structure Check:');
const fs = require('fs');
const path = require('path');

const expectedFiles = [
  'index.ts',
  'controllers/admin.auth.controller.ts',
  'controllers/student.auth.controller.ts',
  'routes/admin.auth.routes.ts',
  'routes/student.auth.routes.ts',
  'middleware/auth.middleware.ts',
  'services/password.service.ts',
  'services/jwt.service.ts',
  'utils/validators.ts',
  'utils/constants.ts',
  'utils/env.utils.ts',
  'types/auth.types.ts',
];

let allFilesExist = true;
expectedFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} (MISSING)`);
    allFilesExist = false;
  }
});

console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 Authentication Service structure is COMPLETE!');
  console.log('\n📋 Next Steps:');
  console.log('   1. Test endpoints with Postman/Thunder Client');
  console.log('   2. Integrate with main Express app');
  console.log('   3. Add database models (after team decides on ORM)');
} else {
  console.log('⚠️  Some files are missing. Please create them first.');
}