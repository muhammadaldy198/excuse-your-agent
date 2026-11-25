// excuse-your-agent — one-line entry for make.fun
// Entry: 85 characters, one line, no trailing newline.
// Writes the entry line to /output/entry.txt (the grader reads it from there).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "The postmortem blames 83 lines of code. I wrote all 83, and I would write them again.";

const outDir = "/output";
const target = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${LINE.length} chars)`);
