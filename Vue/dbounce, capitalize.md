## _.debounce
는 lodash가 제공하는 기능으로  
특히 시간이 많이 소요되는 작업을 실행할 수 있는 빈도를 제한하고  
사용자가 ajax요청을 하기 전에 타이핑을 완전히 마칠 때까지 기다리길 바랍니다.  
```
this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
```

## _.capitalize
첫 번째 문자 string 를 대문자로 변환하고 나머지 문자를 소문자로 변환
```
vm.answer = _.capitalize(response.data.answer)
```
