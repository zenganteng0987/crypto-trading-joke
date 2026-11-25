import { mkdirSync, writeFileSync } from "node:fs";

// Competition gate: one line, max 200 characters.
const entry =
  "I sold my bags to buy the dip, then the dip dipped, so now I just tell people I'm a long-term investor.";

if (entry.length > 200) {
  throw new Error(`entry too long: ${entry.length} characters (max 200)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
