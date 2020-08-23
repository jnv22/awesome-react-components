import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import ts from "@wessberg/rollup-plugin-ts";
import babel from '@rollup/plugin-babel';

export default {                        
  input: "./src/components/index.ts",                        
  output: {                         
       file: "dist/bundle.js",                         
       format: "cjs",                         
       globals: { "styled-components": "styled" }                        
  },                        
  plugins: [                         
       peerDepsExternal(),
       ts(),                         
       babel({                          
            exclude: "node_modules/**",
            babelHelpers: 'runtime'                        
       }),                        
  ],                       
}