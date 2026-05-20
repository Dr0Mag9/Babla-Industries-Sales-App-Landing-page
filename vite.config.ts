import fs from 'fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

// Self-healing asset organizer to clean up files with spaces/parentheses
function organizeAssets() {
  const assetsDir = path.resolve(__dirname, 'public/assets');
  const imagesDir = path.resolve(assetsDir, 'images');

  try {
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    const mappings = [
      { oldName: 'Babla Group Of Industries .png', newName: 'images/app-hero-mockup.png' },
      { oldName: 'Babla Group Of Industries (2).png', newName: 'images/screenshot1.png' },
      { oldName: 'Babla Group Of Industries (3).png', newName: 'images/screenshot2.png' },
      { oldName: 'Babla Group Of Industries (4).png', newName: 'images/screenshot3.png' },
      { oldName: 'Babla Group Of Industries (5).png', newName: 'images/screenshot4.png' },
      { oldName: 'BABLA GROUP OF  INDUSTRIES - SALES APP.pdf', newName: 'BablaSalesAppGuide.pdf' }
    ];

    mappings.forEach(({ oldName, newName }) => {
      const oldPath = path.resolve(assetsDir, oldName);
      const newPath = path.resolve(assetsDir, newName);

      if (fs.existsSync(oldPath)) {
        if (fs.existsSync(newPath)) {
          fs.unlinkSync(newPath);
        }
        fs.renameSync(oldPath, newPath);
        console.log(`[Asset Organizer] Moved & renamed: ${oldName} -> ${newName}`);
      }
    });
  } catch (error) {
    console.error('[Asset Organizer] Error organizing assets:', error);
  }
}

organizeAssets();

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
