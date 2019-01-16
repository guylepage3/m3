<div align="center">
  <a href="https://github.com/universelabs/meta">
    <img src="https://user-images.githubusercontent.com/1711854/51249578-b45c9800-1961-11e9-9bcd-1e34c0b93fe4.png" width=72 height=72>
  </a>
  <h3 align="center">Meta</h3>
  <p align="center">
    Meta is an open source blockchain UI framework.
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
  </p>
</div>
<br/>
<p align="center">
  <a href="https://universe.engineering">
    <img width="600" alt="meta-v0.2.7" src="https://user-images.githubusercontent.com/1711854/48637773-b07dbb00-e99c-11e8-8c5c-0ef2a431ab8a.png">
  </a>
</p>

<br/>


## Table of contents

- [Quick Start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Meta UI](#meta-ui)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Maintainers](#maintainers)
- [License](#license)


## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/universelabs/meta/releases/tag/1.1.20).
- Clone the repo: `git@github.com:universelabs/meta.git`.
- Install with [npm](https://www.npmjs.com/): `npm install @universelabs/meta`.
- Install with [yarn](https://yarnpkg.com/): `yarn add @universelabs/meta`.


## Status

[![Slack](https://img.shields.io/badge/Community-Join_the_Slack!-purple.svg?colorA=212121&colorB=3f46ad)](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE)
[![Meta version](https://img.shields.io/badge/dynamic/json.svg?label=Meta+version&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.version&colorA=%23212121&colorB=%2300BB00)](https://github.com/universelabs/meta)
[![Build status](https://img.shields.io/circleci/project/github/universelabs/meta.svg?label=Build+status&colorA=%23212121)](https://circleci.com/gh/universelabs/meta)
[![devDependencies Status](https://img.shields.io/david/dev/universelabs/meta.svg?label=devDependencies&colorA=%23212121)](https://david-dm.org/universelabs/meta?type=dev)
[![npm version](https://img.shields.io/npm/v/@universelabs/meta.svg?colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/@universelabs/meta)

## What's included

Meta allows developers to quickly design and build quality user interfaces with little effort. With minimal adjustment, developers are able to create unique interfaces in less time. Think of the Meta as your design assistant.

#### Full-spectrum Color System
Meta contains a Full-spectrum Color System. Inspired by [Palx](https://github.com/jxnblk/palx) and [Open Color](https://yeun.github.io/open-color), Meta's Color System guides developers through fool proof color theming while providing them with a wide gamut of colors to choose from. No additional color tools necessary.

#### Duo Type Functionality
Although Meta is primarily used as an interface framework, developers can use the advanced type options and simply apply a `*-editorial` suffix to type classes to get highly functional editorial typography. No need to adjust font-size, line-height, margins, spacing. There are two types of typography in Meta:
  1. **Regular Typography** for interface design and layout within graphical 
     user interfaces. ie. List of songs, play button, settings.
  2. **Editorial Typography** for lengthier content sets of copy that are for 
     written communications. ie. promotional pages, blog posts, documentation, etc.

#### Responsive Ratio Type Scaling
Functional typography that implements complex type scaling with responsive & ratio scaling for greater readability out of the box. Meta provides complex typography and layout. For those looking for greater flexibility, Meta is easily adjustable. With only a few values, developers can quickly test and deploy dramatic changes to their application.

#### Sketch Shared Library
Meta now comes with **"Meta UI"**, a FREE Sketch Shared Library including Style Guide and Symbol resources. The library allows developers to add Meta UI to their Sketch App for in app access to Meta styles, colors, type, components, and more. Once added, the **Meta UI** library syncs directly to Sketch Cloud. Sketch will notify users of any additions or updates.

```text
@universelabs/meta/
└── scss/
    └── meta.scss
```


## Meta UI

**Meta UI** is a FREE Sketch Shared Library including Style Guide and Symbol resources for rapid prototyping in Sketch. The library allows developers to add Meta UI to their Sketch App for in app access to Meta styles, colors, type, components, and more. Once added, the Meta UI library syncs directly to Sketch Cloud. Sketch will notify users of any additions or updates.

For detailed instructions on how to add Meta UI to your Sketch Libraries, visit [Meta UI](https://github.com/universelabs/meta/blob/master/META-UI.md).


## Documentation

Meta is currently an extension of the [Bootstrap](https://getbootstrap.com/) framework. An easy to use Sass file that gets compiled with [Bootstrap Theming](https://getbootstrap.com/docs/4.1/getting-started/theming/).

Follow the instructions below to get your version of the `Meta Documentation` up and running.

### Running Meta Documentation locally
1. Quickly start by cloning the repository to your local machine `git clone git@github.com:universelabs/meta.git`.
2. Ensure you have [`npm`](https://www.npmjs.com/get-npm) installed. `npm` comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/). `brew install node`.
3. Add dependencies `npm install`.
4. Start the local client side server and run the app. The app will automatically open your web browser and navigate to http://localhost:3000/ for you `npm start`.

For detailed instructions on how to customize Meta and the Meta Documentation, visit [Documentation](https://github.com/universelabs/meta/blob/master/DOCUMENTATION.md).


## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you
must include relevant unit tests. All code should conform to the [Code Guidelines](CONTRIBUTING.md#code-guidelines).


## Community

Get updates on Meta's development and chat with the project maintainers and community members.

- Follow [@universelabs on Twitter](https://twitter.com/universelabs).
- Join the official [Universe Slack](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE) chat room.

For more details on how to get involved in the Universe Community visit the [Universe Community page](https://github.com/universelabs/universe/blob/master/COMMUNITY.md) and learn more about events, roadmap, weekly & daily scrum, past weekly community scrum calls, and more...


## Maintainers

**Guy Lepage**
- <https://twitter.com/guylepage3>
- <https://github.com/guylepage3>


## License

By contributing your code, you agree to license your contribution under the [
MIT License](LICENSE).

This project was bootstrapped with [Create React App `v2`](https://github.com/facebookincubator/create-react-app) and uses the UI framework [Bootstrap](https://github.com/twbs/bootstrap) as it's foundational base.


<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>