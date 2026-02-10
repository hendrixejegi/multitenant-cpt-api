// debug-routes.ts
const authRouter = require('./index').default;

console.log('🔍 DEBUG: Inspecting router structure...\n');

function inspect(router: any, indent = 0) {
  const spaces = ' '.repeat(indent * 2);
  
  router.stack.forEach((layer: any, i: number) => {
    console.log(`${spaces}[Layer ${i}] Name: ${layer.name || 'anonymous'}`);
    
    if (layer.route) {
      // It's a direct route
      const methods = Object.keys(layer.route.methods).join(', ').toUpperCase();
      console.log(`${spaces}  → ROUTE: ${methods} ${layer.route.path}`);
    } else if (layer.name === 'router' && layer.handle) {
      // It's a sub-router (adminRoutes or studentRoutes)
      console.log(`${spaces}  → SUB-ROUTER found!`);
      
      // Check what's in the sub-router
      layer.handle.stack.forEach((subLayer: any, j: number) => {
        if (subLayer.route) {
          const subMethods = Object.keys(subLayer.route.methods).join(', ').toUpperCase();
          console.log(`${spaces}    - ${subMethods} ${subLayer.route.path}`);
        }
      });
    }
  });
}

inspect(authRouter);