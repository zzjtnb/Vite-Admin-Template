import path from 'path'
export default {
  port: 5000,
  alias: {
    "@/*": path.resolve(__dirname, 'src/*')
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      ws: true,
      changeOrigin: true
    }
  }
}