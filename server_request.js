var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {

  console.log("request : " + request.url);
  var parseUrl = url.parse(request.url);

  // 파라미터 제거
  var resource = parseUrl.pathname;
  console.log("resource : " + resource);

  // 3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달
  if(resource == '/address'){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('서울특별시 강남구 논현1동 111');
  }else if(resource == '/phone'){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('02-3545-1237');
  }else if(resource == '/name'){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hong Gil Dong');
  }else{
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('404 Page Not Found');
  }

});

server.listen(8080, () => {
  console.log('Server is running...');
});
