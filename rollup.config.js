// rollup.config.js

import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

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
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    postcss({
      extract: true,
      minimize: true
    }),
    terser()
  ]
};
