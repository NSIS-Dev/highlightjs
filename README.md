# @nsis/highlightjs

[![License](https://img.shields.io/github/license/NSIS-Dev/highlightjs?style=for-the-badge)](LICENSE)
[![Version: npm](https://img.shields.io/npm/v/@nsis/highlightjs?style=for-the-badge)](https://www.npmjs.org/package/@nsis/highlightjs)
[![CI](https://img.shields.io/github/actions/workflow/status/NSIS-Dev/highlightjs/ci.yml?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://github.com/NSIS-Dev/highlightjs/actions/workflows/ci.yml)

Syntax definition for the NSIS language.

**Latest version supported: NSIS v3.12**

> [!NOTE]
>
> This language file has been a part of the highlight.js core since 2013. However, the latest fixes and changes are only available in this package.

## Usage

```js
import hljs from "highlight.js/lib/core";
import nsis from "nsis.mjs";

hljs.registerLanguage("nsis", nsis);
hljs.highlightAll();
```

## License

Released under the [BSD License](LICENSE).
