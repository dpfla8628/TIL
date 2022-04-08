## webpack이란
최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler)  
*모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구

> bundle이 중요한 이유
1. 모든 모듈을 로드하기 위해 검색하는 시간이 단축된다
2. 사용하지 않는 코드를 제거해준다
3. 파일의 크기를 줄여준다

### install
```
npm install webpack webpack-cli --save-dev
```
### setting
- webpack.config.js
```js
const path = require('path');

// npx webpack 명령어를 통해 dist폴더에 bundle.js 파일이 생성된다
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,' dist'),
    filename: 'bundle.js'
  },
  target: 'node'
}
```

