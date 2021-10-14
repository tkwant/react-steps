import { defineConfig, loadEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const path = require('path')
const IS_BUILD_DEMO = process.env.BUILD_DEMO
let buildConfig
if(IS_BUILD_DEMO){
  buildConfig = {
    outDir: 'dist-demo'
}
}else{
  buildConfig= {
    lib: {
      entry: path.resolve(__dirname, 'src/Stepper.tsx'),
      name: 'React-Stepper',
      fileName: (format) => `react-stepper.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: buildConfig
})
