<div align="center">
  <h3 align="center">m[3]</h3>
  <p align="center">
    m3. Advanced typography framework.
  </p>
  <p align="center">
    <a href="https://m3-one.vercel.app" alt="m3-one.vercel.app">
      m3-one.vercel.app
    </a>
    &middot;
    <a href="https://github.com/guylepage3/m3/issues/new?labels=&template=bug_report.md" alt="Report a Bug (m3)">
      Report bug
    </a>
    &middot;
    <a href="https://github.com/guylepage3/m3/issues/new?labels=&template=feature_request.md" alt="Request feature (m3)">
      Request feature
    </a>
    &middot;
    <a href="https://twitter.com/intent/follow?screen_name=guylepage3" alt="Follow me on Twitter">
      Twitter
    </a>
    &middot;
    <a href="https://medium.com/guylepage3" alt="guylepage3 – Medium">
      Medium
    </a>
    &middot;
    <a href="https://www.npmjs.com/package/m3-one" alt="npm">
      npm
    </a>
  </p>
  <p align="center">
    <a href="https://github.com/guylepage3/m3/stargazers">
      <img src="https://img.shields.io/github/stars/guylepage3/m3.svg?style=for-the-badge&label=Star+Repo&logo=github&logoColor=white&colorA=%232667C6&colorB=%232f81f7&maxAge=2592000" alt="Star Repo" />
    </a>
  </p>
  <p align="center">
    <a href="https://github.com/guylepage3/m3/blob/master/DOCUMENTATION.md" alt="m3 Documentation">
      Documentation
    </a>
</div>
<br/>
<p align="center">
  <a href="https://m3-one.vercel.app">
    <img width="600px" alt="2023-05-02-m3 [3360x2100]" src="https://user-images.githubusercontent.com/1711854/235768362-1aed404c-7cb4-4b85-9759-816bdfad3f4f.png">
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
- [Documentation](https://github.com/guylepage3/m3/blob/master/DOCUMENTATION.md)
- [m3 Palette](#m3-palette)
- [Contributing](#contributing)
- [Community](#community)
- [Maintainers](#maintainers)
- [License](#license)

## Overview

m3 (v2.0.0) currently focuses on making typography easier for developers to layout content effectively. It also comes with a guided type system to take away the pain of choosing type layout.

## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/guylepage3/m3/releases).
- Clone the repo: `git@github.com:guylepage3/m3.git`.
- Install with [npm](https://www.npmjs.com/package/m3-one): `npm i m3-one`.
- Install with [yarn](https://yarnpkg.com/): `yarn add m3-one`.

<h3>Status</h3>

[![m3 version](https://img.shields.io/badge/dynamic/json.svg?label=m3+version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fguylepage3%2Fm3%2Fmaster%2Fpackage.json&query=%24.version&style=for-the-badge&colorA=%23000000&colorB=%23007BFF)](https://github.com/guylepage3/m3)
[![Build status](https://img.shields.io/circleci/project/github/guylepage3/m3.svg?style=for-the-badge&label=Build+status&colorA=%23000000)](https://circleci.com/gh/guylepage3/m3)
[![npm version](https://img.shields.io/npm/v/@universelabs/m3.svg?style=for-the-badge&colorA=%23000000&colorB=%23CA0000)](https://www.npmjs.com/package/m3-one)
![npm](https://img.shields.io/npm/dt/m3-one?style=for-the-badge&colorA=%23000000&colorB=%23CA0000)
<br />

## What's included

Within the download you'll find the following directories and files. m3's Scss variables and mixins are all imported to `m3.scss`. You'll see something like this:

```text
m3/
└── scss/
    ├── _m3-color.scss
    ├── _m3-mixins.scss
    ├── _m3-spacing.scss
    ├── _m3-type-scaling.scss
    ├── _m3-type.scss
    ├── _m3-reboot.scss
    ├── _variables.scss
    ├── m3.scss
    └── mixins/
        └── _lists.scss
```

This simple structure allows you to simply import the `m3.scss` file directly into any project after your other UI framework imports and/or before your project's custom styling.

## Getting started

Quickly start by using the one line [NPM](https://www.npmjs.com/package/m3-one) install.

```
npm i m3-one
```

```
@import "node_modules/m3-one/scss/m3.scss";
```

alternatively, you can import css directly

```
@import "node_modules/m3-one/css/m3.css";
```

Import the `m3.scss` file directly into any project after other front-end framework imports and/or before your project's custom styling.

## Features and benefits

- m3 computes and scales type and spacing, making it much easier to layout content.
- m3 can easily be added in addition to any other frontend framework such as Boostrap, Tailwind CSS, Material UI, etc.
- m3 allows developers to quickly design and build quality user interfaces with little effort.
- Both Web3 compatible.
- Easy install and update via [NPM](https://www.npmjs.com/package/m3-one) and PNPM.

### Typography

- m3 adds functional typography that implements complex type scaling with responsive & ratio scaling for superior readability.
- Duo type functionality
  - There are two types of typography in m3:
    1. Regular Typography for interface design and layout within graphical user interfaces. ie. List of songs, play button, settings.
    2. Editorial Typography for lengthier content sets of copy that are for written communications. ie. promotional pages, blog posts, documentation, etc.
- Although m3 is primarily used as an interface framework, developers can use the advanced type options and simply apply a `*-editorial` suffix to type classes to get highly functional editorial typography. [Learn more](https://github.com/guylepage3/m3/blob/master/DOCUMENTATION.md#editorial).
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

## m3 Palette

**m3 Palette** (Coming soon!) is an open source Figma template including Style Guide and Symbol resources for rapid prototyping in Figma. The library provides access to m3 advanced typography, scaling, spacing, styling, components, and more.

## Documentation

View the [Documentation](https://github.com/guylepage3/m3/blob/master/DOCUMENTATION.md) for detailed instructions on how to use and customize m3.

## Contributing

Please read through our [contributing guidelines](https://github.com/guylepage3/m3/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you
must include relevant unit tests. All code should conform to the [Code Guidelines](https://github.com/guylepage3/m3/blob/master/CONTRIBUTING.md#code-guidelines).

## Community

Get updates on development and chat with the project maintainers and community members.

- [Star this repo](https://github.com/guylepage3/m3/stargazers)
- Follow [@guylepage3](https://twitter.com/guylepage3) on Twitter.

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
