# Site Cleanup — 2026-05-22

Structural cleanup of the static site. **No visible content, layout, copy, links, or styling were changed** — every change is invisible to a visitor. Each change is reversible via git (run `git log` / `git diff HEAD~` to inspect).

## Changes

### 1. Removed compromised dependency (security)
- **`research.html`**: removed the `<script src="https://polyfill.io/v3/polyfill.min.js?features=es6">` tag.
- **Why**: the `polyfill.io` domain was sold in early 2024 and the new owner began serving malware to visitors. Any site loading scripts from it became a supply-chain risk. MathJax 3 does not need the polyfill in modern browsers, so removal is safe.

### 2. Fixed HTML `<head>` structure
- **`research.html`** and **`teaching.html`**: the `<title>`, `<meta>`, favicon `<link>`, and bootstrap `<link>` tags were sitting *between* `<html>` and `<head>` — i.e., outside the head. Moved them inside `<head>` where the spec requires them.
- **Why**: browsers tolerated the mis-nesting, but validators flag it and some headless tools (link-checkers, scrapers, SEO crawlers) don't read tags placed outside `<head>`. `index.html` was already correct.

### 3. Closed unclosed `<p>` tags in `research.html`
Five paper abstracts opened a `<p>` but closed the parent `<div>` directly without `</p>`. Added the missing `</p>` for each:
- Information Acquisition by Mutual Fund Investors (line ~107)
- Illiquidity Meets Intelligence (line ~131)
- Growth and Performance of AI in Asset Management (line ~154)
- Human Capital and Local Credit Supply (line ~183)
- The Geography of Information Acquisition (line ~274 — the existing `</p>` was inside a `<!-- ... -->` block, so it never actually closed the paragraph; moved the close outside the comment)

**Why**: browsers auto-close `<p>` at the next block element so the page rendered fine, but the markup was technically invalid. Now the structure matches what visitors see.

### 4. Deleted orphan files
- **`cv.html`** — was a leftover Bootstrap navbar stub with `<title>W3.CSS Template</title>`. Not linked from anywhere. The actual CV is served as `CV.pdf` (linked from `index.html`).
- **`navigation.html`** — also a leftover stub. Each page already inlines its own navigation; nothing references this file.

Both are recoverable from git history if ever needed.

## Not changed (deliberately)

Things flagged in the review but left alone because changing them would alter rendering, styling, or content:
- Bootstrap 5.0.0-beta2 pin (upgrading to 5.3 stable could shift visual details)
- Hand-tuned per-paper image heights/widths in `research.html`
- Duplicated nav markup across three pages
- `type="img/jpg"` typo on the favicon (should be `image/jpg`) in `research.html` and `teaching.html` — works regardless
- One stray `</div>` near the end of `research.html` — browsers ignore it; removing it doesn't change rendering
- Anything in the `MD/` folder (this file is the first occupant)

## Files touched
- `research.html` — modified
- `teaching.html` — modified
- `cv.html` — deleted
- `navigation.html` — deleted
- `MD/clean_up.md` — new (this file)
