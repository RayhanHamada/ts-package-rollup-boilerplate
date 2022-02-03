import { defineConfig } from 'rollup';
import pluginTs from 'rollup-plugin-ts';
import { ScriptTarget } from 'typescript';

/**
 * modify this to your needs
 */
export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      name: 'CJS',
      dir: 'dist',
      format: 'cjs',
    },
    {
      name: 'ESM',
      dir: 'dist/esm',
      format: 'esm',
    },
  ],
  plugins: [
    pluginTs({
      tsconfig: {
        target: ScriptTarget.ESNext,
        declaration: true,
      },
    }),
  ],
  external: [/node_modules/],
});
