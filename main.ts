import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn\u2019t miss the deadline \u2014 my context window evicted it to make room for the meeting notes about the deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
