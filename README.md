# MISSION 25 — The Gotham Love Story

A static, mobile-friendly romantic comic-book invitation website.

## Files
- `index.html` — comic-book opening / story
- `memories.html` — photo memories + song card
- `puzzle.html` — 3×3 sliding photo puzzle; completion unlocks the letter
- `letter.html` — personal letter + all 15 Things I Love About You
- `date.html` — invitation and RSVP choices
- `style.css`, `script.js`, `assets/`

## Publish on GitHub Pages (mobile-friendly)
1. Open the GitHub repository you already created.
2. Open the repository's **Code** tab.
3. Choose **Add file → Upload files**.
4. Upload the *contents* of this folder (the five `.html` files, `style.css`, `script.js`, `README.md`, and the entire `assets` folder). Do not upload the outer ZIP as the only file.
5. Scroll down and tap **Commit changes**.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch **main** and folder **/(root)**, then tap **Save**.
9. Wait a minute or two, then open the GitHub Pages URL shown there.

If the repository already has the old site, choose the option to replace the existing files when uploading. Keep all assets in the `assets` folder so image links work.

## Notes
- The puzzle uses local browser storage to remember completion on the same browser/device.
- The RSVP selection currently displays a confirmation on the page; it does not send a message to anyone.
- The song card links to a Spotify search for “honeybee Olivia Rodrigo” rather than embedding a track with an unverified ID.
- The site uses a Gotham/noir comic-book atmosphere with original generated comic artwork; it does not include official Batman comic panels.


Latest update: the Our Universe page is now an interactive Gotham Evidence Room with four clickable photo clues and a final verdict. A floating Be More soundtrack dock links to Stephen Sanchez’s official YouTube video on every page. The embedded official player requires the visitor to press Play; playback may stop when navigating between separate HTML pages.
