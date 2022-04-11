HtmlWebpackPlugin은 webpack 번들을 제공하는 HTML 파일 생성을 단순화합니다.  
이 플러그인은 매번 컴파일에 변경되는 해시로 된 파일 이름을 가진 webpack 번들에 특히 유용합니다.  
플러그인이 HTML 파일을 생성하도록 하거나 lodash 템플릿을 사용하여 나만의 템플릿을 제공하거나 나만의 로더를 사용할 수 있습니다.  

```
npm i html-webpack-plugin -D
```
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
...
plugins: [
  new HtmlWebpackPlugin({
    template: './template.html' //이와 같이 이름과 경로를 지정해주면 해당 html 파일 자동 생성
  })
]
```
