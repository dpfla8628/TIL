## commonjs
index.js
```js
const { getCricleArea } = require('./mathUtil');

const result = getCircleArea(2);
console.log(result);
```
mathUtil.js
```js
const PI = 3.14;
const getCircleArea = r => r * r * PI;

// 둘 중에 하나 사용
//module.exports = {
//  PI,
//  getCircleArea
//}
exports.PI = PI;
exports.getCircleArea = getCircleArea;
```
## esm
```
npm install esm
node -r esm index.js
```
index.js
```js
// 1
import { getCricleArea } from './mathUtil';
const result = getCircleArea(2);
console.log(result);

or
//2
import { MathUtil } from './mathUtil';
const result = MathUtil.getCircleArea(2);
console.log(result);
```
mathUtil.js
```js
//1
export {
  PI,
  getCircleArea
 }
 or
 //2
 export default {
  PI,
  getCircleArea
 }
```
