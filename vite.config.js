import path from 'path'
export default {

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