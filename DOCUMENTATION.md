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
  <p align="center">
    <a href="https://github.com/universelabs/meta">
      ‹ Back to Meta GitHub
    </a>
  </p>
</div>
<br/>

<br/>


## Table of contents

- [What's included](#whats-included)
- [Getting started](#getting-started)
- [Theming](#theming)
- [Typography](#typography)
- [Color system](#color-system)
- [Spacing](#spacing)


## What's included

Within the download you'll find the following directories and files. Meta's SCSS variables and mixins are all imported to `meta.scss`. You'll see something like this:

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

Meta classname convention is derived from the [Bootstrap](https://getbootstrap.com/) framework so you should feel right at home.


## Theming

In order to theme Meta, you'll need to first install and connect Meta to your project using...

```
npm i @universelabs/meta
```

Once you have installed Meta via npm you can theme or cusomize Meta.

When theming Meta we want to import `meta.scss` and then your `custom.scss` to ensure we get the correct compiled CSS. We do this by first creating a `custom.scss`.

```

// Meta
// Your Custom.scss

@import "node_modules/@universelabs/meta/scss/meta.scss";
@import "node_modules/@universelabs/meta/scss/custom.scss";

```

From there you can simply start overwriting your SCSS with the following

```

// Your variable overrides
$body-bg: #000;
$body-color: #111;

// Meta and its default variables
@import "node_modules/@universelabs/meta/scss/meta.scss";
@import "node_modules/@universelabs/meta/scss/custom.scss";

```


## Typography

Documentation and examples for typography, including global settings, headings, body text, lists, and more.

#### Headings

All HTML headings, `<h1>` through `<h6>`, are available.

```
  <h1>h1 Heading</h1>
  <h2>h2 Heading</h2>
  <h3>h3 Heading</h3>
  <h4>h4 Heading</h4>
  <h5>h5 Heading</h5>
  <h6>h6 Heading</h6>
```

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

```
  <p class="h1">h1. Heading</p>
  <p class="h2">h2. Heading</p>
  <p class="h3">h3. Heading</p>
  <p class="h4">h4. Heading</p>
  <p class="h5">h5. Heading</p>
  <p class="h6">h6. Heading</p>
```

#### Display headings

Display headings are larger headings than the traditional `h1` headings.

```
  <h1 class="display-1">Display 1</h1>
  <h1 class="display-2">Display 2</h1>
  <h1 class="display-3">Display 3</h1>
  <h1 class="display-4">Display 4</h1>
```

#### Lead

`.lead` paragraphs are for more predominant content.

```
  <p class="lead"></p>
  <p class="lead-md"></p>
  <p class="lead-lg"></p>
```

```
  <p class="lead">
    Lorem ipsum scaling sit blockchain, decentralized economic governance.
  </p>
```

#### Blockquotes

Blockquote classes, wrap `<blockquote class="blockquote">` around any HTML as the quote.

```
  <blockquote class="blockquote"></blockquote>
  <blockquote class="blockquote-md"></blockquote>
  <blockquote class="blockquote-lg"></blockquote>
```

```
  <blockquote class="blockquote">
    <p class="mb-0">
      Lorem ipsum scaling sit blockchain, decentralized economic governance.
    </p>
  </blockquote>
```


## Color system

The Meta color system allows for a full range of color options.

```
<div class="bg-primary">.bg-primary</div>
<div class="bg-secondary">.bg-secondary</div>
<div class="bg-success">.bg-success</div>
<div class="bg-danger">.bg-danger</div>
<div class="bg-warning">.bg-warning</div>
<div class="bg-info">.bg-info</div>
<div class="bg-light">.bg-light</div>
<div class="bg-dark">.bg-dark</div>
<div class="bg-white">.bg-white</div>
<div class="bg-transparent">.bg-transparent</div>
```

#### Full-Spectrum Color Set

```
$base:             #005bf7;
$success-green:    #00bb00;
$danger-red:       #ff0000;
$warning-yellow:   #fbc02d;
$info-blue:        #1e90ff;
$white:            #fff;
$black:            #000;

#### Meta Colors
50, 100, 200, 300, 400, 500, 600, 700, 800, 900

$navy
$slate
$polo-gray
$midnight
$blue-gray
$blue
$indigo
$violet
$fuschia
$pink
$red
$orange
$yellow
$lime
$green
$teal
$cyan

#### Google Material Colors
500 & 600

$material-red
$material-pink
$material-purple
$material-deep-purple
$material-indigo
$material-blue
$material-light-blue
$material-cyan
$material-teal
$material-green
$material-light-green
$material-lime
$material-yellow
$material-amber
$material-orange
$material-deep-orange
$material-brown
$material-blue-gray
```


## Spacing

Where property is one of:

- `m` - for classes that set `margin`.
- `p` - for classes that set `padding`.

Where size is one of:

- `0` - for classes that eliminate the`margin` or `padding` by setting it to `0`
- `1` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `.25`
- `2` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `.5`
- `3` - (by default) for classes that set the `margin` or `padding` to `$spacer`
- `4` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `1.5`
- `4b` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `2`
- `4c` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `2.5`
- `5` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `3`
- `6` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `3.5`
- `7` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `4`
- `8` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `4.5`
- `9` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `5`
- `10` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `5.5`
- `11` - (by default) for classes that set the `margin` or `padding` to `$spacer` * `6`
- `auto` - for classes that set the `margin` to `auto`


<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>
