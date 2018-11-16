<div align="center">

  <h3>Meta</h3>

  <p>
    Meta is an open source blockchain UI framework.
    <br />
    (<a href="http://getbootstrap.com/">Bootstrap</a> foundational base)
    <br/>
    <br/>
    <a href="https://universe.engineering">
      <strong>universe.engineering</strong>
    </a>
  </p>
  <p>
    <a href="https://github.com/universelabs/meta/issues/new" alt="Report a Bug (Meta)">
      Report bug
    </a>
    &middot;
    <a href="https://github.com/universelabs/" alt="GitHub universelabs (Universe Labs)">
      Explore
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
<p align="center">
  <a href="https://universe.engineering">
    <img width="800" alt="meta-v0.2.7" src="https://user-images.githubusercontent.com/1711854/48637773-b07dbb00-e99c-11e8-8c5c-0ef2a431ab8a.png">
  </a>
</p>

<br/>

This project was bootstrapped with [Create React App `v2`](https://github.com/facebookincubator/create-react-app).


## Table of contents

- [Status](#status)
- [Quick Start](#quick-start)
- [Repository maintainers](#repository-maintainers)

## Status
- Initiated framework `[Meta](https://github.com/univereselabs/meta/blob/master/src/styles/Custom.scss)`.
  - Color System
  - Spacing Rules
  - Communication Typography System
    - Calculations for a `1rem` and `1.0625rem` base `font-size`.
    - Full definition of Base Typography, Headings, Display Headings, Leads, 
      and Paragraphs.

[![CircleCI](https://circleci.com/gh/universelabs/meta.svg?style=svg&circle-token=c8c59e2e9bf86e8aa656500fd86bbdac6f60f481)](https://circleci.com/gh/universelabs/meta)
[![Meta version](https://img.shields.io/badge/dynamic/json.svg?label=Meta&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.version&colorA=%23212121&colorB=%2300BB00)](https://github.com/universelabs/meta)
[![Universe Community](https://img.shields.io/badge/Universe_Community-Join_the_Slack!-purple.svg?colorA=212121&colorB=3f46ad)](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE)

[![Dependencies Status](https://david-dm.org/universelabs/meta.svg)](https://david-dm.org/universelabs/meta)
[![@fortawesome/fontawesome-svg-core version](https://img.shields.io/badge/dynamic/json.svg?label=@fortawesome/fontawesome-svg-core&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22@fortawesome/fontawesome-svg-core%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core)
[![@fortawesome/free-brands-svg-icons version](https://img.shields.io/badge/dynamic/json.svg?label=@fortawesome/free-brands-svg-icons&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22@fortawesome/free-brands-svg-icons%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons)
[![@fortawesome/free-solid-svg-icons version](https://img.shields.io/badge/dynamic/json.svg?label=@fortawesome/free-solid-svg-icons&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22@fortawesome/free-solid-svg-icons%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)
[![@fortawesome/react-fontawesome version](https://img.shields.io/badge/dynamic/json.svg?label=@fortawesome/react-fontawesome&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22@fortawesome/react-fontawesome%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
[![Ajv version](https://img.shields.io/badge/dynamic/json.svg?label=Ajv&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22ajv%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/ajv)
[![Bootstrap version](https://img.shields.io/badge/dynamic/json.svg?label=Bootstrap&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22bootstrap%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/bootstrap)
[![jQuery version](https://img.shields.io/badge/dynamic/json.svg?label=jQuery&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22jquery%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/jquery)
[![node-sass version](https://img.shields.io/badge/dynamic/json.svg?label=node-sass&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22node-sass%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/node-sass)
[![npm version](https://img.shields.io/npm/v/npm.svg?colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/npm)
[![Popper version](https://img.shields.io/badge/dynamic/json.svg?label=Popper&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22popper.js%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/popper.js)
[![px-rem-reference version](https://img.shields.io/badge/dynamic/json.svg?label=px-rem-reference&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.devDependencies%5B%22px-rem-reference%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/px-rem-reference)
[![React version](https://img.shields.io/badge/dynamic/json.svg?label=React&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22react%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/react)
[![ReactDOM version](https://img.shields.io/badge/dynamic/json.svg?label=ReactDOM&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22react-dom%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/react-dom)
[![React Router DOM version](https://img.shields.io/badge/dynamic/json.svg?label=React+Router+DOM&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22react-router-dom%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/react-router-dom)
[![react-scripts version](https://img.shields.io/badge/dynamic/json.svg?label=react-scripts+%28Create+React+App%29&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22react-scripts%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/react-scripts)
[![Serve version](https://img.shields.io/badge/dynamic/json.svg?label=Serve&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22serve%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/serve)
[![Source Map Explorer version](https://img.shields.io/badge/dynamic/json.svg?label=Source+Map+Explorer&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Fmeta%2Fmaster%2Fpackage.json&query=%24.dependencies%5B%22source-map-explorer%22%5D&colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/source-map-explorer)


```
Meta
├── .gitignore
├── package-lock.json
├── package.json
├── public
│  └── index.html
│  └── manifest.json
├── README.md
└── src
│  └── App.js
│  └── App.test.js
│  └── components
|  │  └── Footer.js
|  │  └── HeaderLight.js
|  │  └── Home.js
|  │  └── NoMatch.js
|  │  └── Page404.js
|  │  └── Typography.js
│  └── components
│  └── index.js
│  └── serviceWorker.js
│  └── styles
|     └── App.css
|     └── Custom.scss (Meta UI)
|     └── index.css
└── static.json
```


## Quick start

Quickly start by cloning the repository to your local machine

```
$ git clone git@github.com:universelabs/meta.git
```

Install [`npm`](https://www.npmjs.com/get-npm). `npm` is installed and comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/)

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


## Repository maintainers

**Guy Lepage**
- <https://twitter.com/guylepage3>
- <https://github.com/guylepage3>

<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>