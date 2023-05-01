<div align="center">
  <h3 align="center">m3 Documentation</h3>
  <p align="center">
    <a href="https://github.com/guylepage3/m3/issues/new?labels=&template=bug_report.md" alt="Report a Bug (m3)">
      Report bug
    </a>
    &middot;
    <a href="https://github.com/guylepage3/m3/issues/new?labels=&template=feature_request.md" alt="Request feature (m3)">
      Request feature
    </a>
    &middot;
    <a href="https://twitter.com/intent/follow?screen_name=guylepage3" alt="Follow Guy Lepage on Twitter">
      Twitter
    </a>
    &middot;
    <a href="https://medium.com/guylepage3" alt="Guy Lepage – Medium">
      Medium
    </a>
    &middot;
    <a href="https://www.npmjs.com/package/m3css" alt="NPM m3">
      npm
    </a>
  </p>
  <p align="center">
    <a href="https://twitter.com/intent/follow?screen_name=guylepage3">
      <img src="https://img.shields.io/twitter/url/https/twitter.com/guylepage3.svg?style=social&label=Follow%20%40guylepage3&logo=twitter" alt="Follow Guy Lepage on Twitter" />
    </a>
    &middot;
    <a href="https://github.com/guylepage3/m3/stargazers">
      <img src="https://img.shields.io/github/stars/guylepage3/m3.svg?style=social&label=Star&maxAge=2592000" alt="Star Repo" />
    </a>
  </p>
  <p align="center">
    <a href="https://github.com/guylepage3/m3">
      ‹ Back to m3
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

Within the download you'll find the following directories and files. m3's SCSS variables and mixins are all imported to `m3.scss`. You'll see something like this:

```text
guylepage3/m3/
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

Quickly start by using the one line [NPM](https://www.npmjs.com/package/m3css) install.

```
npm i m3css
```

```
@import "node_modules/m3css/scss/m3.scss";
```

Import the `m3.scss` file directly into any project after your other UI framework imports and/or before your project's custom styling. (The following is an example of how to import via React.js).

m3 classname convention is derived from the [Bootstrap](https://getbootstrap.com/) framework so you should feel right at home.


## Theming

In order to theme m3, you'll need to first install and connect m3 to your project using...

```
npm i m3css
```

Once you have installed m3 via npm you can theme or cusomize m3.

When theming m3 we want to import `m3.scss` and then your `custom.scss` to ensure we get the correct compiled CSS. We do this by first creating a `custom.scss`.

```

// m3
// Your Custom.scss

@import "node_modules/m3css/scss/m3.scss";
@import "node_modules/m3css/scss/custom.scss";

```

From there you can simply start overwriting your SCSS with the following

```

// Your variable overrides
$body-bg: #000;
$body-color: #111;

// m3 and its default variables
@import "node_modules/m3css/scss/m3.scss";
@import "node_modules/m3css/scss/custom.scss";

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

#### Editorial

m3 features `*-editorial` classes for `headings`, `displays`, `leads` and `blockquotes`. The classes add additional `y` axis `margin` spacing, making them ideal for products looking for advanced typography, such as blogs, editorial sites, infographics, and more.

To use the `*-editorial` classes, simply apply the `*-editorial` suffix to type classes to get highly functional editorial typography.

```
  <h1 class="h1-editorial"></h1>
  <h2 class="h2-editorial"></h2>
  <h3 class="h3-editorial"></h3>
  <h4 class="h4-editorial"></h4>
  <h5 class="h5-editorial"></h5>
  <h6 class="h6-editorial"></h6>
```

```
  <h1 class="h1 h1-editorial"></h1>
  <h2 class="h2 h2-editorial"></h2>
  <h3 class="h3 h3-editorial"></h3>
  <h4 class="h4 h4-editorial"></h4>
  <h5 class="h5 h5-editorial"></h5>
  <h6 class="h6 h6-editorial"></h6>
```

```
  <h1 class="display-1 display-1-editorial"></h1>
  <h1 class="display-2 display-2-editorial"></h1>
  <h1 class="display-3 display-3-editorial"></h1>
  <h1 class="display-4 display-4-editorial"></h1>
```

```
  <p class="lead lead-editorial"></p>
  <p class="lead-md lead-md-editorial"></p>
  <p class="lead-lg lead-lg-editorial"></p>
```

```
  <blockquote class="blockquote blockquote-editorial"></blockquote>
  <blockquote class="blockquote-md blockquote-md-editorial"></blockquote>
  <blockquote class="blockquote-lg blockquote-lg-editorial"></blockquote>
```

```
  <p class="lead-lg lead-lg-editorial">
    Lorem ipsum scaling sit blockchain, decentralized economic governance.
  </p>
```


## Color system

The m3 color system allows for a full range of color options.

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

#### m3 Colors
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
