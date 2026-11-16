# Build notes — round 3

- Image: generated fresh for this round — three luminous whales breaching
  in a spiral between night-city skyscrapers. Saved as `entry.png`
  (500x1000, 1,026,494 bytes, under the 1 MiB / 1024x1024 limits).
- `main.ts` (Node 22 stdlib only) copies the bundled `entry.png` to
  `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`) and checks the
  output size. No image generation happens at runtime.
- Verified: two runs of `node main.ts` produce byte-identical output
  (sha256 compared, see the build report).
- Files: `main.ts`, `entry.png`, `LICENSE` (MIT), `README.md`, this note.
