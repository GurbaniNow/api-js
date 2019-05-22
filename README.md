<!-- Do not modify README.md, instead modify README.hbs -->

# api-js
A JavaScript Wrapper for the [GurbaniNow API](https://github.com/GurbaniNow/api)

[![npm](https://img.shields.io/npm/v/gurbaninow.svg?style=flat-square)](https://www.npmjs.com/package/gurbaninow)
[![Travis (.org)](https://img.shields.io/travis/GurbaniNow/api-js.svg?style=flat-square)](https://travis-ci.org/GurbaniNow/api-js)
[![GitHub license](https://img.shields.io/github/license/GurbaniNow/api-js.svg?style=flat-square)](./LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/GurbaniNow/api-js.svg?style=flat-square)](https://github.com/GurbaniNow/api-js/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/GurbaniNow/api-js.svg?style=flat-square)](https://github.com/GurbaniNow/api-js/pulls)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/gurbaninow/badge)](https://www.jsdelivr.com/package/npm/gurbaninow)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FGurbaniNow%2Fapi-js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FGurbaniNow%2Fapi-js?ref=badge_shield)

## Contents

<!-- toc -->

- [Usage](#usage)
- [API](#api)
  * [getShabad(shabadId, [devApi]) ⇒ Object](#getshabadshabadid-devapi-%E2%87%92-object)
- [Contributing](#contributing)

<!-- tocstop -->

## Usage

Install the library via NPM:
```
npm install gurbaninow
```

The library can be imported into Node as below:
```javascript
const gn = require('gurbaninow')

gn.getShabad('DMP', true)
```

Additionally, the package is available for web use via [unpkg CDN](https://unpkg.com/gurbaninow).
```
<script src="https://unpkg.com/gurbaninow"></script>
```

Or via [jsDelivr](https://www.jsdelivr.com/package/npm/gurbaninow)
```
<script src="https://cdn.jsdelivr.net/npm/gurbaninow/dist/index.min.js"></script>
```

Want a demo?  
[![Try on RunKit](https://img.shields.io/badge/Try%20on%20RunKit-gurbaninow-brightgreen.svg?style=flat-square)](https://npm.runkit.com/gurbaninow)

## API

### getShabad(shabadId, [devApi]) ⇒ <code>Object</code>
Fetches and returns Shabad via ShabadID from GurbaniNow API

**Returns**: <code>Object</code> - GurbaniNow API Response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| shabadId | <code>string</code> \| <code>number</code> |  | ShabadID of Shabad to request |
| [devApi] | <code>boolean</code> | <code>false</code> | Use Development API instead of Production |

**Example**  
```js
getShabad( 'DMP', true )
```

## Contributing

We're happy to accept suggestions and pull requests!

To get started, clone this repo and run `npm install` inside this directory. 

This repository follows the **Airbnb's Javascript Style Guide**, with a few minor modifications. Notably, spaces should be included inside parentheses and brackets (weird, right!). An ESLint file is provided,
and your code will automatically be checked on-commit for style.
It is recommended to install an ESLint plugin for your editor (VS Code's `ESLint` plugin works out of the box), so you can receive
linter suggestions as you type.

When writing commit messages, please follow the **[seven rules](https://chris.beams.io/posts/git-commit/#seven-rules)**. 
Markdown and HTML JSDoc documentation is generated automatically, on commit,
however if you'd like to preview any changes to documentation, `npm run build-docs` will
update `README.md`. `README.md` should *not* be edited, instead apply modifications to `README.hbs`.

The general workflow for contributing:

- Fork/create a new branch.
- Write or update existing tests with expected results
- Implement functions/changes
- Add JSDoc function documentation and examples.
- Run tests with `npm test` and ensure they all pass. Testing is done with the `mocha` testing framework.
- Create a pull request with the changes.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FGurbaniNow%2Fapi-js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FGurbaniNow%2Fapi-js?ref=badge_large)