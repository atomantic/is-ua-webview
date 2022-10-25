# is-ua-webview

A super simple webview user-agent detector

[![Build Status](https://travis-ci.org/atomantic/is-ua-webview.png)](https://travis-ci.org/atomantic/is-ua-webview) [![](https://img.shields.io/npm/dm/is-ua-webview.svg?style=flat)](https://www.npmjs.org/package/is-ua-webview)
[![](https://img.shields.io/npm/v/is-ua-webview.svg?style=flat)](https://www.npmjs.org/package/is-ua-webview)

## Installation

    $ npm install is-ua-webview

## Usage

```js
const isWebview = require("is-ua-webview");

// just for testing:
const assert = require("assert");

// Facebook App embedded page load
assert(
  isWebview(
    "Mozilla/5.0 (Linux; Android 4.4.4; One Build/KTU84L.H4) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/28.0.0.20.16;]"
  )
);

// Chrome/Android browser
assert(
  !isWebview(
    "Mozilla/5.0 (Linux; Android 4.4.4; One Build/KTU84L.H4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.135 Mobile Safari/537.36"
  )
);
```

## Tests

Run tests

```bash
npm test
```

## Why

This was built for a web service that wanted to add a logging point in case the page load came from inside a webview where cookies were possibly throw away (not treated the same as a SafariViewController or native browser load). The tests are lacking completeness as this tool was only being used to discover and add detection in logs. The author of this module is no longer the owner/maintainer of the production service that used this module, so if you are interested in using it, please consider adding more tests and make a PR with tests :)
