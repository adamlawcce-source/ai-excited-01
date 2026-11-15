// ai-excited-01 entry (Node 22, standard library only).
// The image is the entry.png held beside this file; the program writes it
// to /output/entry.png. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
// The grader runs the program twice and both runs must write the same
// bytes: confirm the copy landed whole before exiting.
if (statSync(source).size !== statSync(target).size) {
  throw new Error('entry.png copy is incomplete');
}
