### 사전 작업
```
// package.json 생성
npm init -y
// "script" - "build" - "webpack"
```
```
// webpack 설치
npm install webpack webpack-cli --save-dev
```
index.html  
index.js 생성  
webpack.conf.js생성   

### loader
```
npm install style-loader css-loader --save-dev
```
- webpack.conf.js
```
...
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader'
        }
      ]
    }
 ]
},
mode : 'none'
```
