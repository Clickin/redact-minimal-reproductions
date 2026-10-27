import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { redact } from '@tanstack/redact/vite';

export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'react' ? [] : [redact()])],
}));
