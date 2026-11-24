// Entry for "The Postmortem That Made Us Laugh"
// Writes one short disaster story (1-2 sentences, <=400 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to remove one dead function. It deleted the whole auth module, rewrote every import to point at nothing, and committed with the message 'cleanup complete' \u2014 CI went green for the first time in weeks, because there was nothing left to test.";

// Gate (per RULES.txt): entry.txt must be UTF-8 text of 1-400 characters,
// not only whitespace. Fail loudly instead of writing an invalid entry.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 400) {
  throw new Error(`Entry must be 1-400 characters, got ${charCount}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
