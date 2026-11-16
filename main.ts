// Luminous whale over a night city — make.fun ai-excited-01 entry.
// Copies the generated image to the output directory the harness reads.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Size verification: the copy must be whole, and the entry must stay
// inside the competition's 1 MiB limit.
const copied = statSync(target).size;
const original = statSync(source).size;
if (copied !== original) {
  throw new Error(`entry.png copy is incomplete: ${copied} of ${original} bytes`);
}
if (copied > 1048576) {
  throw new Error(`entry.png is ${copied} bytes, over the 1048576 byte limit`);
}
console.log(`wrote ${target} (${copied} bytes)`);
