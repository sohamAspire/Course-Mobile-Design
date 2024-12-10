import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from local network
    port: 5173,      // Default port (adjust if needed)
  },
  build: {
    assetsInlineLimit: 0, // Set to 0 to prevent inlining any SVGs
    outDir: 'dist',     // Output directory
    sourcemap: true,    // Generate source maps for debugging
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]', // Ensure assets have hashed filenames
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
});
