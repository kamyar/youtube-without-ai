# YouTube Without AI

YouTube Without AI is a Firefox port of [Weedout for YouTube](https://github.com/masteranza/weedout-for-youtube). The extension hides videos that YouTube labels as “Made with AI.”

The Firefox source is in `extension/`. The original Safari application is in `app/`.

## What it does

- It uses YouTube disclosure labels instead of a blocklist or an AI detector.
- Hide mode removes labeled videos.
- Dim mode fades labeled videos and adds a label.
- The optional auto-skip setting skips labeled Shorts.
- The extension stores its cache and settings locally.
- The extension does not send analytics or tracking requests.

## Requirements

- Firefox 142 or a later version
- Node.js 20 or a later version
- npm 8 or a later version

## Build the Firefox extension

Install the locked development dependencies:

```sh
npm ci
```

Validate the extension and create the production package:

```sh
npm run build
```

The build creates `dist/youtube_without_ai-1.0.zip`.

## Limit

YouTube Without AI can only filter videos that YouTube labels. It cannot filter unlabeled AI content.

## License

This project uses the MIT License. See `LICENSE`.
