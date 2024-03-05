const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const postcss = require('rollup-plugin-postcss');
// ? @rollup/plugin-typescript 插件会先从 tsconfig.json 中加载所有配置项作为其初始值。传递新的配置可以覆盖这些选项。你也可以设置 tsconfig 的值为文件路径来指定配置文件。
module.exports = [
  {
    input: './packages/index.ts',
    output: [
      {
        dir: 'lib',
        format: 'cjs',
        entryFileNames: '[name].cjs.js',
        sourcemap: false, // 是否输出sourcemap
      },
      {
        dir: 'lib',
        format: 'esm',
        entryFileNames: '[name].esm.js',
        sourcemap: false, // 是否输出sourcemap
      },
      {
        dir: 'lib',
        format: 'umd',
        entryFileNames: '[name].umd.js',
        name: '$utils', // umd 模块名称，相当于一个命名空间，会自动挂载到window下面
        sourcemap: false,
        plugins: [terser()],
      },
    ],
    plugins: [
      postcss({
        minimize: true,
        extensions: ['.css'],
        extract: true,
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          incremental: false,
        },
      }),
    ],
  },
];
