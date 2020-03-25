import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'cjs',
      format: 'cjs',
    },
    {
      dir: 'esm',
      format: 'esm',
    }
  ],
  preserveModules: true,
  external: Object.keys(pkg.dependencies).concat(['react', 'react-dom', 'lodash']),
  plugins: [
    external(),
    postcss({
      inject: false,
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    resolve(),
    commonjs(),
  ]
}
