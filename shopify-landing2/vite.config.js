// vite.config.js
export default {
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'],
    build: {
      
      publicDir: 'public',
      rollupOptions: {
        input: {
          main: './index.html',
        }
      }
    }
  }