<div align="center">
  <h3 align="center">Meta Documentation</h3>
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
    <br/>
    <br/>
    <a href="https://twitter.com/intent/follow?screen_name=universelabs">
      <img src="https://img.shields.io/twitter/url/https/twitter.com/universelabs.svg?style=social&label=Follow%20%40universelabs&logo=twitter" alt="Follow UniverseLabs on Twitter" />
    </a>
    &middot;
    <a href="https://github.com/universelabs/meta/stargazers">
      <img src="https://img.shields.io/github/stars/universelabs/meta.svg?style=social&label=Star&maxAge=2592000" alt="Star Repo" />
    </a>
  </p>
</div>
<br/>

<br/>


## Table of contents

- [Quick Start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Getting started](#getting-started)
- [Theming](#theming)
- [Contributing](#contributing)
- [Community](#community)
- [Maintainers](#maintainers)
- [License](#license)


## Quick start

Quickly start by cloning the repository to your local machine

```
$ git clone git@github.com:universelabs/meta.git
```

Install [`npm`](https://www.npmjs.com/get-npm). `npm` comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/)

```
$ brew install node
```

Add dependencies

```
$ npm install
```

Start the local client side server and run the app. The app will automatically open your web browser and navigate to http://localhost:3000/ for you

```
$ npm start
```

## Status

Visit the [Releases](https://github.com/universelabs/meta/releases) page to read the release notes and learn more about the latest features and updates.

[![Slack](https://img.shields.io/badge/Community-Join_the_Slack!-purple.svg?colorA=212121&colorB=3f46ad)](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE)
[![Meta version](https://img.shields.io/badge/dynamic/json.svg?label=Meta+version&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.version&colorA=%23212121&colorB=%2300BB00)](https://github.com/universelabs/meta)
[![Build status](https://img.shields.io/circleci/project/github/universelabs/meta.svg?label=Build+status&colorA=%23212121)](https://circleci.com/gh/universelabs/meta)
[![devDependencies Status](https://img.shields.io/david/dev/universelabs/meta.svg?label=devDependencies&colorA=%23212121)](https://david-dm.org/universelabs/meta?type=dev)
[![npm version](https://img.shields.io/npm/v/@universelabs/meta.svg?colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/@universelabs/meta)


## What's included

Meta is currently a simple Sass file that gets compiled with [Bootstrap Theming](https://getbootstrap.com/docs/4.1/getting-started/theming/). More componentry and compatibility coming soon.

```text
meta
├── .circleci/
|   └── config.yml
├── .gitignore
├── DOCUMENTATION.md
├── LICENSE
├── META-UI.md
├── package-lock.json
├── package.json
├── public/
|   └── index.html
|   └── manifest.json
├── README.md
├── scss/
|   └── meta.scss
├── src/
|   └── App.js
|   └── App.test.js
|   └── components/
|   │   └── Footer.js
|   │   └── Header.js
|   │   └── Home.js
|   │   └── NoMatch.js
|   │   └── Page404.js
|   │   └── Typography.js
│   └── css/
|   |   └── App.css
|   |   └── index.css
│   └── index.js
│   └── scss/
|   |   └── meta.scss
│   └── serviceWorker.js
└── static.json
```


## Getting started

The Meta documentation is a simple and easy to use `Meta Design System` for you to reference and/or modify. There currently is no homepage to reference but will be coming soon. In the meantime, we recommend simply following the instructions below to get your version of the `Meta Design System` up and running.

### Running Meta Design System locally
1. Quickly start by cloning the repository to your local machine `git clone git@github.com:universelabs/meta.git`.
2. Ensure you have [`npm`](https://www.npmjs.com/get-npm) installed. `npm` comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/). `brew install node`.
3. Add dependencies `npm install`.
4. Start the local client side server and run the app. The app will automatically open your web browser and navigate to http://localhost:3000/ for you `npm start`.


## Theming

In order to theme Meta, you'll need to first install and connect Meta to your project using...

```
npm i @universelabs/meta
```

Once you have installed Meta via npm you can theme or cusomize Meta.

When theming Meta we want to import bootstrap.scss and then meta.scss to ensure we get the correct compiled CSS. We do this by first creating a `custom.scss`.

```

// Custom.scss
// Include all of Bootstrap and Meta

@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/@universelabs/meta/scss/meta";

```

Since Meta uses Bootstrap as it's foundation, Meta uses the same class names and properties as Bootstrap.

From there you can simply start overwriting your SCSS with the following

```

// Your variable overrides
$body-bg: #000;
$body-color: #111;

// Bootstrap or Meta and its default variables
@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/@universelabs/meta/scss/meta";

```


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
