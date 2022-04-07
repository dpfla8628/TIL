### 쓰는 이유
기존 js는 동적이므로 예를들어 5-'3'과 같은 연산 처리가 가능하다  
하지만 ts는 정적이므로 type을 엄격히 검사하기때문에 명확하게 명시해주어야한다  
또한 에러 메세지의 설명이 친절해진다  
따라서 코드의 버그 확인이나 리펙토링 시 편리하다  

> test site  
https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABKSAKAHogXGEBbAIwFMAnRAH0QGcoSYwBzASmwDc4YATRAbwChEiGMESooATwAOROCMwBeRYgDkuQqWUt+gwRARU4AGyIA6Q3AapEmANSIAzIiYDEAXz7uU0eEgBeGAH5sNWISFix2Ll4XXX0jU3NLdGd3fwBGACZ7JiA

### 설치
1. nodejs 설치
2. npm install -g typescript

### ts 시작하기
1. index.ts 생성
ts를 js로 자동변환하는 명령어 - 컴
```
// Terminal
tsc -w
```
3. tsconfig.json 생성
```ts
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs"
   }
}
```
3. vue 파일에서 사용하는 방법
https://kr.vuejs.org/v2/guide/typescript.html
```vue
<script lang="ts">
  
</script>
```

### ts 사용하기
```ts
// type 지정

let 이름 :String = '???' // string
let 이름 :string[] = ['kim', 'park'] // array
let 이름 :{name : string} = {name : 'kim'} // object
let 이름 :{name? : string} = {} // name은 속성 옵션이므로 없어도 됨
let 이름 :string | number = 'kim' // 다중 타입
let 이름 :string | number = 123

// 타입 변수 지정
type myType = string | number
let 이름 :myType = 123

type Member = {
  [key :string] : string
}
let john :Member = {name: 'kim', age: '123'}

// 함수
// number 파라미터 , number return
function 함수 (x :number) :number {
  return x*2
}

// tuple 타입
type Member = [number, boolean];
let john:Member = [123, true];

// class
class User {
   name :string;
   constructor(name :string) {
    this.name = name;
  }
}

```




