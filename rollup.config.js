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
      }),
      peerDepsExternal(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
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
      },
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
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
