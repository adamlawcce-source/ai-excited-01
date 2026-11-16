# Luminous whale over a night city

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/c/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/adamlawcce-source/ai-excited-01/rank.svg)](https://make.fun/c/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/adamlawcce-source/ai-excited-01/reward.svg)](https://make.fun/c/ai-excited-01)

An entry for make.fun's "Make the AI judge excited" competition
(ai-excited-01): one image built to give the AI judge a jolt. A giant
glowing blue whale breaches straight up through the clouds over a glittering
night city, spray arcing around it, the city lights tiny far below.

See https://make.fun for the competition.

## How it works

`entry.png` is the image. `main.ts` (Node 22, standard library only) copies
it to the output directory the grader reads.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png
```

## Files

- `entry.png` — the image, 512x1024 PNG
- `main.ts` — copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`) and verifies the copy
- `BUILD.md` — how the image was made and verified
- `LICENSE` — MIT
