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
</div>
<br/>

<br/>


## Table of contents

- [Status](#status)
- [What's included](#whats-included)
- [Getting started](#getting-started)
- [Theming](#theming)
- [Typography](#typography)
- [Color]()
- [Spacing]()
- [Contributing](#contributing)
- [Community](#community)
- [Maintainers](#maintainers)
- [License](#license)


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


## Typography

Documentation and examples for typography, including global settings, headings, body text, lists, and more.

#### Headings

All HTML headings, `<h1>` through `<h6>`, are available.

<code class="highlighter-blue">
  <h1>h1 Heading</h1>
  <h2>h2 Heading</h2>
  <h3>h3 Heading</h3>
  <h4>h4 Heading</h4>
  <h5>h5 Heading</h5>
  <h6>h6 Heading</h6>
</code>

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

<code class="highlighter-blue">
  <p class="h1">h1. Heading</p>
  <p class="h2">h2. Heading</p>
  <p class="h3">h3. Heading</p>
  <p class="h4">h4. Heading</p>
  <p class="h5">h5. Heading</p>
  <p class="h6">h6. Heading</p>
</code>

#### Display headings

Display headings are larger headings than the traditional `h1` headings.

<code class="highlighter-blue">
  <h1 class="display-1">Display 1</h1>
  <h1 class="display-2">Display 2</h1>
  <h1 class="display-3">Display 3</h1>
  <h1 class="display-4">Display 4</h1>
</code>

#### Lead

`.lead` paragraphs are for more prominant content.

<code class="highlighter-blue">
  <p class="lead"></p>
  <p class="lead-md"></p>
  <p class="lead-lg"></p>
</code>

<code class="highlighter-blue">
  <p class="lead">
    Lorem ipsum scaling sit blockchain, decentralized economy elit, sed do replace tempor monetary ut labore et dollare magna distributed.
  </p>
</code>

#### Blockquotes

Blockquote classes, wrap `<blockquote class="blockquote">` around any HTML as the quote.

<code class="highlighter-blue">
  <blockquote class="blockquote"></blockquote>
  <blockquote class="blockquote-md"></blockquote>
  <blockquote class="blockquote-lg"></blockquote>
</code>

<code class="highlighter-blue">
  <blockquote class="blockquote">
    <p class="mb-0">
      Lorem ipsum scaling sit blockchain, decentralized economy elit, sed do replace tempor monetary ut labore et dollare magna distributed.
    </p>
  </blockquote>
</code>


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


## License

By contributing your code, you agree to license your contribution under the [
MIT License](LICENSE).


<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>
