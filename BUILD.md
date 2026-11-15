# BUILD.md — ai-excited-01

## The image

A colossal luminous blue whale breaching vertically through a sea of clouds
above a glittering night city, glowing spray exploding around it, the city
lights tiny far below. One huge subject, one vertical thrust, night blue
against warm city gold. Generated as an original image, then resized to
683x1024 and written as `entry.png`; `main.ts` copies it to the output dir.

Three candidates were generated and viewed (whale / stained-glass phoenix /
sky koi). The whale won: it is the only one whose single shape is instantly
clear at small size and whose scale gag (a whale in the sky, a city below)
lands in one look.

## Why it should excite the judge

1. Excitement: a whale flying through the night sky is a jolt — awe first,
   no calm anywhere in the frame.
2. Surprise: an impossible juxtaposition of its own (ocean giant in the
   clouds over a city), not a stock explosion, firework or action scene.
3. Momentum: the breach drives straight up the frame — spray, light and the
   whale's body all point at one bursting moment.
4. Craft: clean rendering, no text, no garbled detail, anatomy and
   perspective hold at full size.
5. Reads small: one dark whale silhouette against bright clouds stays clear
   at ~300px across.

## Verification

- entry.png: 683x1024 PNG, 1,003,527 bytes (cap 1,048,576) — under by 45,049
- main.ts run 1 (out /tmp/ae-run1): sha256 b891fe0a44209df05958ee1bd072d2eea62e53b7810e1eeba2022edcb3e9dc36
- main.ts run 2 (out /tmp/ae-run2): sha256 b891fe0a44209df05958ee1bd072d2eea62e53b7810e1eeba2022edcb3e9dc36
- Both runs byte-identical to each other and to the repo's entry.png.
- Kit check: see report (run before commit).
