// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/viks.ts',
  output: [
    {
      file: 'dist/viks.js',
      format: 'umd',
      name: 'VIKS',
      sourcemap: true
    },
    {
      file: 'dist/viks.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    typescript()
  ]
};
