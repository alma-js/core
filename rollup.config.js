import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**'
  })
]

export default [
  {
    input: 'src/alma-core.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins
  }
]
