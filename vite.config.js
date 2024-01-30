import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import svgPlugin from 'vite-plugin-svg';
import svgr from 'vite-plugin-svgr';

// export default defineConfig({
//   plugins: [
//     react(),
//     svgPlugin({
//       defaultExport: 'component',
//     }),
//   ],
// });

export default defineConfig({
  plugins: [react(), svgr()],
});