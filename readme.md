##### 部分包作用

| 包名                        | 作用                    |
| --------------------------- | ----------------------- |
| @rollup/plugin-node-resolve | 处理路径                |
| @rollup/plugin-typescript   | 支持 TS                 |
| @rollup/plugin-commonjs     | 处理 CommonJS           |
| @rollup/plugin-terser       | 压缩 UMD 规范的输出文件 |
| rollup-plugin-postcss       | 处理 CSS                |

##### package.json 配置项说明

- main： Browser 和 Node 环境中指定的项目入口文件
- module：指定 ESModule 模块的入口文件
- jsnext:main： 同上，不过这个是社区规范，上面是官方规范
- browser：UMD 规范，当直接在浏览器中开发时，可下载 release 包并在浏览器中使用 script 导入
- types：TS 类型声明文件路径
- files：约定 NPM 发包时包含的文件和文件夹

> 执行 npm run build 就会生成一份 lib 文件夹，里面会有 cjs、esm、umd 三种规范的 js 文件，以供不同方式引入。除此之外，还有自动生成的 .d.ts 类型声明文件，是不是很方便~

npm version patch 1.0.0–> 1.0.1
npm version minor 1.0.0–> 1.1.0
npm version major 1.0.0–> 2.0.0
