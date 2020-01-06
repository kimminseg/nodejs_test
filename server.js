// 서버 사용을 위해 http 모듈을 http변수에 담는다.
var http = require('http');

/*
  http 모듈생성, 사용자로부터 http 요청이 들어오면
  function 블럭내부의 코드를 실행하여 응답
*/
var server = http.createServer(function(request, response) {

  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('Hello node.js!!');

});


/*
  listen 함수로 8080포트를 가진 서버를 생성.
  서버가 실행된 것을 콘솔창에서 확인하기 위에 로그작성
*/
server.listen(8080, function() {
  console.log('Server is running...');
});
