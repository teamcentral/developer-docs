# TeamCentral Developer Docs

## Overview
This repo is home to the TeamCentral Developer documentation and is meant to guide users through common/ advanced functionality of the Team Central Platform.

## Getting Started
1. Install dependencies
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
* [Gatbsy CLI](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)
2. Clone repo and install
```sh
git clone https://github.com/teamcentral/developer-docs.git
cd developer-docs
npm install
```
3. Run
```sh
npm run start
```


## Resources
* [Rocket Docs Documentation](https://rocketdocs.gatsbyjs.io/)
* [Rocket Docs Github repo](https://github.com/jpedroschmitz/rocketdocs)
* [MarkDown (MDX) Cheatsheet](https://www.markdownguide.org/cheat-sheet) (provides both simple and advanced examples)

## Pushing code
This repo is watched by [Cloudflare Pages](pages.cloudflare.com), and once it detects any changes, it will automatically clone, build and deploy the docs to docs.teamcentral.ai.

Note: Build times vary.