import { babel } from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
const input = "./src/index.js";

export default [
  //commmonjs lib
  {
    input,
    output: {
      file: "./lib/index.js",
      format: "cjs",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extract : 'ml2-ui.css'
      }),
      nodeResolve(),
      commonjs(),
      terser(),
    ],
  },
  //UMD all lib
  {
    input,
    output: {
      file: "./lib/index.umd.js",
      format: "umd",
      name: "ml2-ui",
      globals: {
        react: "React",
        "prop-types" : "propTypes",
        dayjs : "dayjs"
      },
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
      }),
      commonjs(),
      terser(),
    ],
  },
  //ES all lib
  {
    input,
    output: {
      file: "./lib/index.es.js",
      format: "es",
      exports: "named",
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
          config:{
              path:"./postcss.config.js"
          }
      }),
      commonjs(),
      terser()
    ],
  },
  //commonjs Form
  {
    input: "./src/components/Form/Form.js",
    output: {
      file: "./Form/index.js",
      format: "cjs",
      exports:'default'
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extract: false,
      }),
      nodeResolve(),
      commonjs(),
      terser(),
    ],
  },
  //UMD Form
  {
    input:'./src/components/Form/Form.js',
    output:{
      file:'./Form/index.umd.js',
      format:'umd',
      name:'ml2-ui',
      globals:{
        react: "React",
        "prop-types" : "propTypes",
      },
    },
    plugins:[
      babel({
        exclude:"node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config:{
          path:"./postcss.config.js",
        },
      }),
      commonjs(),
      terser(),
    ],
  },
  //ES Form
  {
    input:'./src/components/Form/Form.js',
    output:{
      file:"./Form/index.es.js",
      format:"es",
      exports:"named",
    },
    plugins:[
      babel({
        exclude:"node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config:{
          path:"./postcss.config.js"
        }
      }),
      commonjs(),
      terser()
    ],
  },
  //Table commonjs
  {
    input: "./src/components/Table/Table.js",
    output: {
      file: "./Table/index.js",
      format: "cjs",
      exports:'default'
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extract: false,
      }),
      nodeResolve(),
      commonjs(),
      terser(),
    ],
  },
  //UMD Table
  {
    input:'./src/components/Table/Table.js',
    output:{
      file:'./Table/index.umd.js',
      format:'umd',
      name:'ml2-ui',
      globals:{
        react: "React",
        "prop-types" : "propTypes",
      },
    },
    plugins:[
      babel({
        exclude:"node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config:{
          path:"./postcss.config.js",
        },
      }),
      commonjs(),
      terser(),
    ],
  },
  //ES Table
  {
    input:'./src/components/Table/Table.js',
    output:{
      file:"./Table/index.es.js",
      format:"es",
      exports:"named",
    },
    plugins:[
      babel({
        exclude:"node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config:{
          path:"./postcss.config.js"
        }
      }),
      commonjs(),
      terser()
    ],
  },
  //Calendar commonjs
  {
    input: "./src/components/Calendar/Calendar.js",
    output: {
      file: "./Calendar/index.js",
      format: "cjs",
      exports:'default'
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extract: false,
      }),
      nodeResolve(),
      commonjs(),
      terser(),
    ],
  },
  //UMD Calendar
  {
    input:'./src/components/Calendar/Calendar.js',
    output:{
      file:'./Calendar/index.umd.js',
      format:'umd',
      name:'ml2-ui',
      globals:{
        react: "React",
        "prop-types" : "propTypes",
        dayjs : "dayjs"
      },
    },
    plugins:[
      babel({
        exclude:"node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config:{
          path:"./postcss.config.js",
        },
      }),
      commonjs(),
      terser(),
    ],
  },
  //ES Calendar
  {
    input:'./src/components/Calendar/Calendar.js',
    output:{
      file:"./Calendar/index.es.js",
      format:"es",
      exports:"named",
    },
    plugins:[
      babel({
        exclude:"node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config:{
          path:"./postcss.config.js"
        }
      }),
      commonjs(),
      terser()
    ],
  },
  //SmallCalendar commonjs
  {
    input: "./src/components/Calendar/SmallCalendar.js",
    output: {
      file: "./SmallCalendar/index.js",
      format: "cjs",
      exports:'default'
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extract: false,
      }),
      nodeResolve(),
      commonjs(),
      terser(),
    ],
  },
  //UMD SmallCalendar
  {
    input:'./src/components/Calendar/SmallCalendar.js',
    output:{
      file:'./SmallCalendar/index.umd.js',
      format:'umd',
      name:'ml2-ui',
      globals:{
        react: "React",
        "prop-types" : "propTypes",
        dayjs : "dayjs"
      },
    },
    plugins:[
      babel({
        exclude:"node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config:{
          path:"./postcss.config.js",
        },
      }),
      commonjs(),
      terser(),
    ],
  },
  //ES Table
  {
    input:'./src/components/Calendar/SmallCalendar.js',
    output:{
      file:"./SmallCalendar/index.es.js",
      format:"es",
      exports:"named",
    },
    plugins:[
      babel({
        exclude:"node_modules/**",
        babelHelpers:"bundled"
      }),
      peerDepsExternal(),
      postcss({
        config:{
          path:"./postcss.config.js"
        }
      }),
      commonjs(),
      terser()
    ],
  },
];
