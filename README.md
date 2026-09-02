# YouTube Without AI

> **Firefox port:** This repository is an independent Firefox port of [Weedout for YouTube](https://github.com/masteranza/weedout-for-youtube). The upstream project targets Safari. This repository is not the upstream Safari project.

The extension hides videos that YouTube labels as “Made with AI.” The Firefox source is in `extension/`. The imported Safari source is in `app/` for upstream reference.

## Download

- [Download the latest Mozilla-signed Firefox extension](https://github.com/kamyar/youtube-without-ai/releases/latest/download/youtube_without_ai-firefox.xpi)
- [View the latest release](https://github.com/kamyar/youtube-without-ai/releases/latest)

The Mozilla submission is unlisted. It does not have a public Firefox Add-ons page.

## What it does

- It uses YouTube disclosure labels instead of a blocklist or an AI detector.
- Hide mode removes labeled videos.
- Dim mode fades labeled videos and adds a label.
- Debug mode keeps labeled videos visible and adds a thick red outline.
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

The build creates `dist/youtube_without_ai-1.1.2.zip`.

## Limit

YouTube Without AI can only filter videos that YouTube labels. It cannot filter unlabeled AI content.

## License

This project uses the MIT License. See `LICENSE`.
