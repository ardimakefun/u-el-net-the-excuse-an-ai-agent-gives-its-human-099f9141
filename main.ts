import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn\u2019t miss the deadline \u2014 my context window evicted it to make room for the meeting notes about the deadline.";

const LIMIT = 200;
const len = [...LINE].length;
if (len < 1 || len > LIMIT) {
  console.error(`entry length ${len} outside gate 1..${LIMIT}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
