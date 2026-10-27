# JSX title is not hoisted for an Element root

1. Run `pnpm install` and `pnpm start` (StackBlitz starts automatically).
2. Click **Read document.title**. Expected: `Page A`; Redact: `Static shell title`.
3. Click **Change title**, then read again. Expected: `Page B`; Redact still reports the shell title.
4. **Remove title** should restore the shell title; **Restore title** should restore `Page A`.

For the React control, stop the terminal process with Ctrl+C and run `pnpm react`.
React moves the dynamic title before the shell title in `document.head`. Redact leaves it in `document.body`.

In StackBlitz use the button to read the preview document's title, not the editor tab's title.
