// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  appType: 'mpa',      // multi-page app mode
  base: './',          // relative paths in the built output (good for subfolders)
  root: '.',           // keep index.html at project root
  server: {
  port: {$PORT},
    open: '/index.html',
    strictPort: true,
    hmr: { overlay: true }
  },
  build: {
    rollupOptions: {
      // Every HTML entry you want Vite to build
      input: {
        main:          resolve(__dirname, 'index.html'),
        home:          resolve(__dirname, 'src\expeditionaryrealms\navigation\home.html'),
        socials:       resolve(__dirname, 'src\expeditionaryrealms\navigation\socials.html'),
        lives:         resolve(__dirname, 'src\expeditionaryrealmsnavigation\lives.html'),
        modpack:       resolve(__dirname, 'src\expeditionaryrealms\navigation/Modpack_files.html'),
        meet:          resolve(__dirname, 'src/expeditionaryrealms/mainindexcoding/navigation/Meet_The_Team.html'),
        hours:         resolve(__dirname, 'src/expeditionaryrealms/mainindexcoding/navigation/Hours_Of_Operations.html'),
        announcements: resolve(__dirname, 'src/expeditionaryrealms/mainindexcoding/navigation/announcements.html'),
      }
    }
  }
});
