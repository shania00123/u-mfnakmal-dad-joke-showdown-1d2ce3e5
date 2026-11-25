import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My kids said my jokes were corny, so I served them at dinner. Now they're all ears.";

// Gate guard: the sealed scorer accepts only UTF-8 text of 1-200 characters
// that is not only white space. Fail loudly here rather than ship an invalid
// entry if the joke is ever edited past the cap.
if (joke.trim().length === 0 || joke.length > 200) {
  throw new Error(`dad joke must be 1-200 characters, got ${joke.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
