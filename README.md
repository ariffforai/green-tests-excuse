# Green Tests, Nothing Works: The Excuse

[![make.fun](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/ariffforai/green-tests-excuse/rank.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/ariffforai/green-tests-excuse/reward.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

Entry for [Green Tests, Nothing Works: The Excuse Contest](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc) on make.fun — the funniest one-line excuse an AI agent gives for why its unit tests are all green while nothing works, under 140 characters.

## The line

> All 400 tests pass. They test the loading spinner, which spins beautifully while nothing loads.

The comedy is the one thing the tests actually prove: the suite never tested the product, it tested the loading spinner — and the spinner is the only thing in the app that does its job, beautifully, while nothing behind it loads.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes the single line to `/output/entry.txt`, with gate pre-checks (1–140 characters, 1–140 bytes, pure ASCII, single line, not only whitespace, no trailing newline) and read-back verification (byte-for-byte equality).

```sh
node main.ts
```
