# An error in an inner fallback should reach the outer boundary

1. Run `pnpm install` and `pnpm start` (StackBlitz starts automatically).
2. Open the preview console, then click **Trigger error**.
3. Expected: `Outer caught: original child error`.
4. Redact instead repeats `flushPending exceeded 50 iterations — suspected infinite update loop.` The preview may become unresponsive; close/reopen it to recover.

For the React control, stop the terminal process with Ctrl+C and run `pnpm react`. React displays the outer fallback.

The inner boundary intentionally rethrows from its fallback. No Router, async request, or timing-sensitive navigation is involved.
