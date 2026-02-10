# Task: Single Screen Layout

## Objective
The game should fit on one screen without scrolling. If a question has numerous answers, they should all fit on one screen.

## Changes
- **CSS**: Modified `.game-board` to remove `overflow-y: auto` (scrolling) and replace it with `overflow: hidden`.
- **CSS**: Implemented dynamic grid layouts using `data-card-count` attribute to adjust the number of columns and rows based on the number of answers.
- **CSS**: Added responsive scaling for font sizes and padding when the number of answers is high (7+), ensuring cards remain compact and readable without overflowing.
- **JS**: Updated `renderBoard` in `app.js` to set the `data-card-count` attribute on the game board container dynamically.

## Verification
- Checked `index.html` structure.
- Checked `css/style.css` for conflicting styles.
- Verified dynamic scaling logic covers cases from 1 to 16 items.
