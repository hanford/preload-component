## preload-component

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

> Preload images the react way

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## Install

```
$ npm install preload-component --save
```


## Usage

```js
import Preload from 'preload-component'

..

render () {
  return (
    <Preload
      images={[img1, img2]}
      onLoad={() => console.log('images loaded!')}
    >
      {hasLoaded => hasLoaded ? <Fragment><img src={img1} /> <img src={img2} /></Fragment> : null}
    </Preload>
  )
}
```

## API
| Param          | Type    | functionality | required |
|----------------|---------|-----------------|-----------------|
| images           | Array | Array of urls you want to preload | true |
| children       | Function    | render function taking the image array load state | true |
| onLoad | Function| Notify consuming component when images are loaded  | false |

## License

MIT © [Jack Hanford](http://jackhanford.com)
