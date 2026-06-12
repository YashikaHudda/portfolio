Instructions to add avatar image

- Save the avatar image file you attached as `avatar.jpg` at the project root (next to `index.html`) OR inside a `public/` folder as `public/avatar.jpg`.
- Start the dev server:

```bash
npm install
npm run dev
```

- The app will attempt to load `/avatar.jpg`. If the file is missing or fails to load, it will fall back to the built-in SVG illustration.

Notes

- If you prefer to keep assets inside `src/assets`, import the image in `src/App.jsx` and update the `src` accordingly. The current implementation uses a simple `/avatar.jpg` static path with an SVG fallback.
