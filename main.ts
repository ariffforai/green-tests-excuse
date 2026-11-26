// Green Tests, Nothing Works: The Excuse Contest
// Writes the funniest one-line excuse for unit tests all green while
// nothing works to /output/entry.txt, then verifies the file round-trips
// byte-identical to the literal below.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "All 400 tests pass. They test the loading spinner, which spins beautifully while nothing loads.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Gate 1: length — the sealed scorer accepts 1 to 140 characters.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  fail(`entry is ${ENTRY.length} characters, must be 1-140`);
}

// Gate 1b: byte length — the tie-break ranks by fewer BYTES, so the
// entry must also fit 140 bytes; with pure ASCII this equals the
// character count, but the gate is checked on bytes directly.
const byteLength = Buffer.byteLength(ENTRY, "utf8");
if (byteLength < 1 || byteLength > 140) {
  fail(`entry is ${byteLength} bytes, must be 1-140`);
}

// Gate 2: pure ASCII — one byte per character, so the byte tie-break
// (smaller text wins) counts exactly the same as the character count.
if (!/^[\x00-\x7F]*$/.test(ENTRY)) {
  fail("entry contains non-ASCII characters");
}

// Gate 3: a single line — no newline or carriage return anywhere.
if (/[\r\n]/.test(ENTRY)) {
  fail("entry must be a single line");
}

// Gate 4: not only white space.
if (ENTRY.trim().length === 0) {
  fail("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });

// No trailing newline: the file is exactly the entry, nothing more.
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Round-trip verification: read the file back and demand it be
// byte-identical to the literal.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  fail("round-trip mismatch: /output/entry.txt differs from the entry");
}

console.log(
  `wrote /output/entry.txt (${ENTRY.length} characters, ${byteLength} bytes)`,
);
console.log(ENTRY);
