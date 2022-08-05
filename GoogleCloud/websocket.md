google cloud function과 websocket을 연동하는 방법     
- index.js
```js
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';
  res.status(200).send(message);

  const WebSocket = require('ws');
const webSocket = new WebSocket("ws://~~~"); // 연결할 서버 주소를 넣고 webSocket 객체 생성, 서버의 주소 프로토콜이 ws임
// 서버처럼 이벤트 리스너로 동작
webSocket.onopen = function() { // onopen 이벤트 리스너 호출: 서버와 연결이 맺어지는 경우
};
let cnt = 0
webSocket.onmessage = function (event) { // onmessage 이벤트 리스너 호출: 서버로부터 메시지가 오는 경우, 서버에서 메세지가 오면 서버로 답장을 보냄
    if(cnt === 0 ) {
        webSocket.send(40);
    }
    if(cnt === 1 ) {
        webSocket.send('420["signin",{"user":"test2","room":"1234"}]');
    }
    if(cnt === 2) {
        webSocket.send('421["sendMessage","asdf"]');
    }
    if(cnt === 3) {
        webSocket.close();
    }
    cnt++
};
webSocket.onclose = function(event) {
    console.log(event)
}
function sendVal() {
    webSocket.send('421["sendMessage","asdf"]');
}

};

```
- package.json
```json
{
  "name": "sample-http",
  "version": "0.0.1",
  "dependencies": {
    "websocket": "^1.0.34",
    "ws": "^8.8.1"
  }
}

```
