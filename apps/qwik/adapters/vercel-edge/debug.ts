import type { Plugin } from 'vite'
import path from "node:path";
import { stat } from "node:fs/promises";

export default function ViteLoggerPlugin(): Plugin {
  async function stats() {
    const appOutDir = path.resolve(__dirname, '../../dist');
    const stats = await stat(appOutDir).catch(() => {});
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log(`@@@@@@ ${stats && stats.isDirectory && stats.isDirectory() ? '  EXISTS  ' : ' MISSING! '} @@@@@@`)
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@')
  }

  return {
    name: 'vite-logger',

    async closeBundle() {
      console.log('closeBundle hook called', );
      await stats();
    },

  };
}
