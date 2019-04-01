<div align="center">
  <h3 align="center">Meta</h3>
  <p align="center">
    Meta is an open source Web3 blockchain UI framework.
    <br/>
    <a href="https://universe.engineering">
      <strong>universe.engineering</strong>
    </a>
  </p>
  <p align="center">
    <a href="https://github.com/universelabs/meta/issues/new?labels=&template=bug_report.md" alt="Report a Bug (Meta)">
      Report bug
    </a>
    &middot;
    <a href="https://github.com/universelabs/meta/issues/new?labels=&template=feature_request.md" alt="Request feature (Meta)">
      Request feature
    </a>
    &middot;
    <a href="https://twitter.com/intent/follow?screen_name=universelabs" alt="Follow UniverseLabs on Twitter">
      Twitter
    </a>
    &middot;
    <a href="https://medium.com/universelabs" alt="UniverseLabs – Medium">
      Medium
    </a>
    &middot;
    <a href="https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE">
      Slack
    </a>
    &middot;
    <a href="https://www.npmjs.com/package/@universelabs/meta" alt="NPM @universelabs/meta">
      npm
    </a>
  </p>
  <p align="center">
    <a href="https://twitter.com/intent/follow?screen_name=universelabs">
      <img src="https://img.shields.io/twitter/url/https/twitter.com/universelabs.svg?style=social&label=Follow%20%40universelabs&logo=twitter" alt="Follow UniverseLabs on Twitter" />
    </a>
    &middot;
    <a href="https://github.com/universelabs/meta/stargazers">
      <img src="https://img.shields.io/github/stars/universelabs/meta.svg?style=social&label=Star&maxAge=2592000" alt="Star Repo" />
    </a>
  </p>
  <p align="center">
    <a href="https://github.com/universelabs/meta/blob/master/DOCUMENTATION.md" alt="Meta Documentation">
      <strong>Meta Documentation › Get Started</strong>
</div>
<br/>
<p align="center">
  <a href="https://universe.engineering">
    <img width="600" alt="meta-v0.2.7" src="https://user-images.githubusercontent.com/1711854/48637773-b07dbb00-e99c-11e8-8c5c-0ef2a431ab8a.png">
  </a>
</p>

<br/>


## Table of contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Getting started](#getting-started)
- [Features and benefits](#features-and-benefits)
- [Documentation](https://github.com/universelabs/meta/blob/master/DOCUMENTATION.md)
- [Meta UI (🎨 Sketch Library Resource)](#meta-ui)
- [Contributing](#contributing)
- [Community](#community)
- [Maintainers](#maintainers)
- [License](#license)


## Overview

Currently Meta focuses on simplifying and making typography easier for developers to design effective content. It also comes with a broad range color system to take away the pain of choosing colors.


## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/universelabs/meta/releases).
- Clone the repo: `git@github.com:universelabs/meta.git`.
- Install with [npm](https://www.npmjs.com/package/@universelabs/meta): `npm i @universelabs/meta`.
- Install with [yarn](https://yarnpkg.com/): `yarn add @universelabs/meta`.


## Status

[![Slack](https://img.shields.io/badge/Community-Join_the_Slack!-purple.svg?colorA=212121&colorB=3f46ad)](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE)
[![Meta version](https://img.shields.io/badge/dynamic/json.svg?label=Meta+version&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.version&colorA=%23212121&colorB=%2300BB00)](https://github.com/universelabs/meta)
[![Build status](https://img.shields.io/circleci/project/github/universelabs/meta.svg?label=Build+status&colorA=%23212121)](https://circleci.com/gh/universelabs/meta)
[![devDependencies Status](https://img.shields.io/david/dev/universelabs/meta.svg?label=devDependencies&colorA=%23212121)](https://david-dm.org/universelabs/meta?type=dev)
[![npm version](https://img.shields.io/npm/v/@universelabs/meta.svg?colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/@universelabs/meta)

## What's included

Within the download you'll find the following directories and files. Meta's Scss variables and mixins are all imported to `meta.scss`. You'll see something like this:

```text
@universelabs/meta/
└── scss/
    ├── _meta-color.scss 
    ├── _meta-mixins.scss
    ├── _meta-spacing.scss
    ├── _meta-type-scaling.scss
    ├── _meta-type.scss
    ├── _meta-reboot.scss
    ├── _variables.scss
    ├── meta.scss
    └── mixins/
        └── _lists.scss
```

This simple structure allows you to simply import the `meta.scss` file directly into any project after your other UI framework imports and/or before your project's custom styling.


## Getting started

Quickly start by using the one line [NPM](https://www.npmjs.com/package/@universelabs/meta) install.

```
npm i @universelabs/meta
```

```
@import "node_modules/@universelabs/meta/scss/meta.scss";
```

Import the `meta.scss` file directly into any project after your other UI framework imports and/or before your project's custom styling. (The following is an example of how to import via React.js).

Most classname convention is dirived from the [Bootstrap](https://getbootstrap.com/) framework so you should feel right at home.


## Features and benefits

- Meta is framework and language agnostic.
- Meta can easily be added in addition to any other frontend framework such as Boostrap, Material UI, etc. 
- Meta allows developers to quickly design and build quality user interfaces with little effort.
- Unlike a lot of UI frameworks, Meta's wide scope of typographic and color variables, empower the creation of unique interfaces.
- Web3 compatible.
- Easy install and update via [NPM](https://www.npmjs.com/package/@universelabs/meta).

### Color
- Full-spectrum Color System
- Color theming.
- WCAG accessibility compliant.
- Wide gamut color range.
- Scalable.
- Over 200 color hues.
- Non-breakable.
- Inspired by [Palx](https://github.com/jxnblk/palx) and [Open Color](https://yeun.github.io/open-color), Meta's Color System guides developers through fool proof color theming while providing them with a wide gamut of colors to choose from.
- No additional color tools necessary.

Full color list coming soon...

### Type
- Meta adds functional typography that implements complex type scaling with responsive & ratio scaling for superior readability.
- Duo type functionality
  - There are two types of typography in Meta:
    1. Regular Typography for interface design and layout within graphical user interfaces. ie. List of songs, play button, settings.
    2. Editorial Typography for lengthier content sets of copy that are for written communications. ie. promotional pages, blog posts, documentation, etc.
- Although Meta is primarily used as an interface framework, developers can use the advanced type options and simply apply a `*-editorial` suffix to type classes to get highly functional editorial typography. [Learn more](https://github.com/universelabs/meta/blob/master/DOCUMENTATION.md#editorial).
- Responsive Ratio Type Scaling
- Customizable ratioing
- Comes with the following default ratios to choose from;
  - minor-second (1.067)
  - major-second (1.125)
  - minor-third (1.2)
  - mid-third (1.215)
  - major-third (1.25)
  - perfect-fourth (1.333)
  - augmented-fourth (1.414)
  - perfect-fifth (1.5)
  - golden-ratio (1.618)
- Responsive type scaling for extra small, small and large devices.
- No need to adjust font-size, line-height, margins, spacing. 

### Spacing
- Vertical Rhythm Spacing
- Easy to implement.
  - margin `m-*`
  - padding `p-*`
- Apply spacing to typography and anywhere else needed.


## Meta UI
**Meta UI** is an open source [Sketch Shared Library](https://www.sketch.com/docs/libraries/shared-libraries) including Style Guide and Symbol resources for rapid prototyping in Sketch. The library allows developers to add the Meta Sketch Resource Library to their local Sketch Application. The library provides access to Meta styles, colors, type, components, and more. Once added, the Meta Sketch Resource Library syncs directly to Sketch Cloud. Sketch will notify users of any additions or updates.

For detailed instructions on how to add Meta UI to your Sketch Libraries, visit [Meta UI](https://github.com/universelabs/meta-ui).


## Documentation

For detailed instructions on how to customize Meta and the Meta Documentation, visit [Documentation](https://github.com/universelabs/meta/blob/master/DOCUMENTATION.md).


## Contributing

Please read through our [contributing guidelines](https://github.com/universelabs/universe/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you
must include relevant unit tests. All code should conform to the [Code Guidelines](https://github.com/universelabs/universe/blob/master/CONTRIBUTING.md#code-guidelines).


## Community

Get updates on Universe's development and chat with the project maintainers and community members.

- Subscribe to the [Universe Newsletter](http://universe.engineering/subscribe)
- [Star this repo](https://github.com/universelabs/universe/stargazers)
- Follow [@universelabs](https://twitter.com/universelabs) on Twitter.
- Join the official Universe [Slack](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE).


## Maintainers

**Guy Lepage**
- <https://twitter.com/guylepage3>
- <https://github.com/guylepage3>


## License

By contributing your code, you agree to license your contribution under the [
MIT License](LICENSE).


<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>