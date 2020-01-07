var http = require('http');
var url = require('url');
var fs = require('fs');

// 파일의 타입을 알아내기 위함
var mime = require('mime');

var server = http.createServer(function(request, response) {

  var parseUrl = url.parse(request.url);
  var resource = parseUrl.pathname;

  if ( resource.indexOf('/images/') == 0 ) {
    var imagePath = resource.substring(1);
    console.log('imagePath :' + imagePath);

    var imageMime = mime.getType(imagePath);
    console.log('imageMime : ' + imageMime);

    fs.readFile(imagePath, function(error, data) {
      if ( error ) {
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server ' + error);
      } else {
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
      }
    });

  } else {
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('404 Page Not Fount');
  }
});

server.listen(80, () => {
  console.log('Server is running...');
});
