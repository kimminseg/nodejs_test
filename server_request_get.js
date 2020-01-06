var http = require('http');

// 요청한 url를 객체로 만들기 위해 사용
var url = require('url');

// 요청한 url중 querystring을 객체로 만들기 위해 사용
var querystring = require('querystring');

var server = http.createServer(function(request, response) {

  console.log('--- log start ---');

  // 요청한 주소를 parsing하여 객체화 만들기
  var parseUrl = url.parse(request.url);
  console.log(parseUrl);

  // 객체화된 url중에 querystring부분만 따로 객체화
  var parsedQuery = querystring.parse(parseUrl.query, '&', '=');
  console.log(parsedQuery);

  console.log('--- log end ---');

  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('Hello server_request_get.js !!');

});

server.listen(8080, function() {
  console.log('Server is running...');
});
