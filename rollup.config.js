import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json'
import cjs from '@rollup/plugin-commonjs'
import node from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import ts from '@rollup/plugin-typescript'

export default defineConfig([{
    input: "./src/index.ts",
    plugins: [
        ts({
            tsconfig: "./tsconfig.json",
            declaration: true,
            declarationDir: "./types/",
            declarationMap: true,
            sourceMap: true
        }),
        node(),
        json(),
        cjs(),
        terser()
    ],
    external: ["@node-rs/jieba"],
    output: {
        format: "cjs",
        file: "./dist/index.js",
        sourcemap: true
    }
}, {
    input: "./src/index.ts",
    plugins: [
        ts({
            tsconfig: "./tsconfig.json",
            declaration: true,
            declarationDir: "./types/",
            declarationMap: true,
            sourceMap: true
        }),
        node(),
        json(),
        cjs(),
        terser()
    ],
    external: ["@node-rs/jieba"],
    output: {
        format: "esm",
        file: "./dist/index.esm.js",
        sourcemap: true
    }
}])