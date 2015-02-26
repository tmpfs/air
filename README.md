Table of Contents
=================

* [Air](#air)
  * [Design](#design)
  * [Usage](#usage)
  * [Install](#install)
  * [API](#api)
  * [Developer](#developer)
    * [Test](#test)
    * [Cover](#cover)
    * [Lint](#lint)
    * [Clean](#clean)
    * [Dist](#dist)
    * [Spec](#spec)
    * [Instrument](#instrument)
    * [Readme](#readme)
  * [Roadmap](#roadmap)
  * [License](#license)

Air
===

Lightweight, modular DOM library.

Browser targets are relatively *modern browsers* from IE9+, Chrome, Firefox, Safari and modern versions of Opera (post [blink](http://www.chromium.org/blink) integration).

## Design

Whilst the API is similar to [jquery](http://jquery.com) some notable design decisions:

* Plugin architecture.
* No global variables.
* Do not support HTML parsing.

To get a feel for how lightweight `air` is see [air.js](https://github.com/socialally/air/blob/master/lib/air.js), the core of the system is less than 100 lines of code (with comments). All other files in [lib](https://github.com/socialally/air/blob/master/lib) are plugins that should be loaded depending upon your application requirements.

## Usage

Designed to work with [browserify](http://browserify.org) by default, assuming you have configured the [browserify](http://browserify.org) `paths` option correctly:

```javascript
var $ = require('air');
$.plugin([
  require('event')
])
```

## Install

```
npm i air
```

Note that currently we do not own the `air` package and we are attempting to resolve this. Therefore this module is currently published to a *private* registry. This project is open-source and if we resolve the package name dispute will be published to the public registry as `air` otherwise an alternative package name will be used.

In the meantime you can depend upon the git repository:

```
"air": "socialally/air"
```

## API

## Developer

Developer workflow is via [gulp](http://gulpjs.com) but should be executed as `npm` scripts to enable shell execution where necessary.

### Test

Run the headless test suite using [phantomjs](http://phantomjs.org):

```
npm test
```

To run the tests in a browser context open [test/index.html](https://github.com/socialally/air/blob/master/test/index.html).

### Cover

Run the test suite and generate code coverage:

```
npm run cover
```

### Lint

Run the source tree through [eslint](http://eslint.org):

```
npm run lint
```

### Clean

Remove generated files:

```
npm run clean
```

### Dist

Create distribution builds in [dist](https://github.com/socialally/air/blob/master/dist):

```
npm run dist
```

### Spec

Compile the test specifications:

```
npm run spec
```

### Instrument

Generate instrumented code from `lib` in `instrument`:

```
npm run instrument
```

### Readme

Generate the project readme file (requires [mdp](https://github.com/freeformsystems/mdp)):

```
npm run readme
```

## Roadmap

1. Get the core plugins stable and well tested with comprehensive code coverage.
2. Build a command line interface to generate custom plugin builds for various module standards including [umd](https://github.com/umdjs/umd), [requirejs](http://requirejs.org) and [systemjs](https://github.com/systemjs/systemjs).

## License

Everything is [MIT](http://en.wikipedia.org/wiki/MIT_License). Read the [license](https://github.com/socialally/air/blob/master/LICENSE) if you feel inclined.

Generated by [mdp(1)](https://github.com/freeformsystems/mdp).

[node]: http://nodejs.org
[npm]: http://www.npmjs.org
[jquery]: http://jquery.com
[gulp]: http://gulpjs.com
[phantomjs]: http://phantomjs.org
[browserify]: http://browserify.org
[eslint]: http://eslint.org
[blink]: http://www.chromium.org/blink
[requirejs]: http://requirejs.org
[umd]: https://github.com/umdjs/umd
[systemjs]: https://github.com/systemjs/systemjs
[mdp]: https://github.com/freeformsystems/mdp
