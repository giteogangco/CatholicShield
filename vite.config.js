import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Proxies /gemini-proxy/* → Google Gemini API in local dev
        // Vite adds the API key server-side so it never appears in browser network tab
        '/gemini-proxy': {
          target: 'https://generativelanguage.googleapis.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/gemini-proxy/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              // Append key as query param (Gemini auth method)
              const key = env.VITE_GEMINI_API_KEY || req.headers['x-gemini-key'] || ''
              const url  = proxyReq.path
              proxyReq.path = url.includes('?')
                ? `${url}&key=${key}`
                : `${url}?key=${key}`
              // Remove our custom header so it doesn't reach Google
              proxyReq.removeHeader('x-gemini-key')
            })
          },
        },
      },
    },
  }
})
