# YouTube Without AI

> **Firefox port:** This repository is an independent Firefox port of [Weedout for YouTube](https://github.com/masteranza/weedout-for-youtube). The upstream project targets Safari. This repository is not the upstream Safari project.

The extension hides videos that YouTube labels as “Made with AI.” The Firefox source is in `extension/`.

## Download

- [Download the latest Mozilla-signed Firefox extension](https://github.com/kamyar/youtube-without-ai/releases/latest/download/youtube_without_ai-firefox.xpi)
- [View the latest release](https://github.com/kamyar/youtube-without-ai/releases/latest)

The current Mozilla release is unlisted. After Mozilla approves a listed submission, the extension will be available at [addons.mozilla.org/firefox/addon/youtube-without-ai](https://addons.mozilla.org/firefox/addon/youtube-without-ai/).

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

The build creates `dist/youtube_without_ai-1.1.4.zip`.

## Submit a listed AMO version

1. Update the versions in `package.json` and `extension/manifest.json`.
2. Push the change to `main`.
3. Open the **Publish to AMO** workflow in GitHub Actions.
4. Select **Run workflow**.
5. Enter the exact manifest version.

The workflow validates and builds the extension. It then submits the extension to the listed AMO channel with `amo-metadata.json`. The workflow does not wait for Mozilla review.

Each AMO version can use only one distribution channel. Do not create a `v*` tag for a version that you submit to the listed channel. The tag release workflow uses the unlisted channel.

## Limit

YouTube Without AI can only filter videos that YouTube labels. It cannot filter unlabeled AI content.

## License

This project uses the MIT License. See `LICENSE`.
