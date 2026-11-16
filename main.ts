// Round 3 entry for make.fun ai-excited-01.
// The program reproduces the bundled image deterministically: it copies
// entry.png (three luminous whales breaching in a spiral between night-city
// skyscrapers) to the output directory. No generation happens at runtime.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const destination = join(outDir, "entry.png");
copyFileSync(source, destination);
const written = statSync(destination);
if (written.size === 0 || written.size > 1_048_576) {
  throw new Error(`entry.png is ${written.size} bytes, expected 1..1048576`);
}
console.log(`wrote ${destination} (${written.size} bytes)`);
