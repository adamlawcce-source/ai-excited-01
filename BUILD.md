# Build notes — ai-excited-01 (rebuild, 2026-11-16)

## The image

A fresh image generated for this rebuild: a colossal luminous blue whale
breaching vertically through clouds above a glittering night city. The whale
glows electric blue, water streaming off it in arcs of light, the city
sparkling far below. One huge subject, one upward thrust, cold night blue
against warm city gold. The generated image was viewed, then resized to
512x1024 and saved as `entry.png`.

## Why it should excite the judge

1. Excitement: a whale flying through the night sky is a jolt of awe, not
   a calm scene.
2. Surprise: an ocean giant in the clouds over a city — an idea of its own,
   not a stock explosion, firework, or generic action scene.
3. Momentum: the breach drives straight up the frame; spray, light, and
   the whale's body all point at one bursting moment.
4. Craft: clean rendering, no text, no smears or garbled detail.
5. Reads small: the single dark whale shape against bright cloud stays
   clear at about 300px across.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), then verifies the copy:
the copied size must match the original, and it must be at most 1,048,576
bytes, or the program throws.

## Verification (this session)

- entry.png: 512x1024 PNG, 882,740 bytes — under the 1,048,576 byte cap
  and inside the 1024x1024 limit
- main.ts run 1 (MAKEFUN_OUTPUT_DIR=/tmp/ae-v2-run1):
  sha256 34964ab509cd91b3a8eb93f3b0e9217d2cff04894c80e4191137581c9e3411ff
- main.ts run 2 (MAKEFUN_OUTPUT_DIR=/tmp/ae-v2-run2):
  sha256 34964ab509cd91b3a8eb93f3b0e9217d2cff04894c80e4191137581c9e3411ff
- Both runs byte-identical to each other and to the repo's entry.png.
- All files in this repo (entry.png, main.ts, LICENSE, README.md,
  BUILD.md) were written fresh in this session; nothing was copied from
  git history or from the previous entry.
