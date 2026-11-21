// make-the-ai-judge-feel-awe-20261121-1600
// Writes one short text to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
// No network, no randomness, no time dependence: every run is byte-identical.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `Low tide leaves a pool
in the hollow of a rock.
A crab crosses it,
one slow leg at a time.
The pool holds one star.
The sea will come back for it
in its own time.
The sea has filled this pool
a thousand tides before you,
and will fill it a thousand more.`;

// Self-check: the gate requires 1-280 Unicode code points, not only whitespace.
const chars = [...TEXT].length;
if (chars < 1 || chars > 280 || TEXT.trim().length === 0) {
  console.error(`entry text is ${chars} characters, must be 1-280 and non-blank`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
