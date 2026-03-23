# Floating Video Widget

A floating video bubble widget for Framer sites. Displays a looping video in the bottom-right corner that expands into a full player with CTA buttons when clicked.

## How it works

- A small video bubble sits fixed in the bottom-right corner
- Clicking it expands into a full modal player with sound
- CTA buttons appear overlaid on the video
- Closing returns to the bubble
- Dismissing (X) hides it for the session

---

## Setup for Framer

### Step 1 — Host your video

Upload your `.mp4` to [Supabase Storage](https://supabase.com) (or any public URL). Make sure the bucket is set to **public**.

### Step 2 — Update the config in `widget.js`

Open `widget.js` and edit the default config values at the top of the file:

```js
var C = window.VW_CONFIG || {
  videoUrl:     'YOUR_VIDEO_URL_HERE',
  greeting:     'Welcome!',
  ctaColor:     '#1281d8',
  ctaTextColor: '#ffffff',
  buttons: [
    { label: 'Book Your Demo', url: 'https://yoursite.com/#demo' },
    { label: 'Product Tour',   url: 'https://yoursite.com/#features' }
  ]
};
```

Commit and push the change to GitHub.

### Step 3 — Add to Framer

1. In Framer, go to **Site Settings → Custom Code**
2. Click **+** to add a new script
3. Set **Placement** to `End of <body>`
4. Set **Run** to `Once`
5. Paste this into the code box (replace the commit hash with your latest):

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_GITHUB_USERNAME/Video-Web-Widget@COMMIT_HASH/widget.js"></script>
```

> **Tip:** Always use a specific commit hash (e.g. `@afbe3cd`) rather than `@main` to avoid jsDelivr caching stale versions.

6. Click **Save**, then **Publish** your Framer site

---

## Updating the widget

1. Edit `widget.js` locally
2. Commit and push to GitHub — `git push`
3. Get the new commit hash: `git rev-parse --short HEAD`
4. Update the commit hash in the Framer script URL
5. Save and republish in Framer

---

## Customisation reference

| Property | Description |
|---|---|
| `videoUrl` | Public URL to your `.mp4` video |
| `greeting` | Text shown in the modal header |
| `ctaColor` | Button background colour (hex) |
| `ctaTextColor` | Button text colour (hex) |
| `buttons` | Array of `{ label, url }` CTA buttons |

---

## Local preview

Open `video-widget.html` in your browser to preview the widget with your config before deploying.
