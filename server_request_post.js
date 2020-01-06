var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(request, response) {

  var postData = '';

  request.on('data', function(data) { postData = postData + data; });

  request.on('end', function(data){
      var parsedQuery = querystring.parse(postData);
      console.log(parsedQuery);
      response.writeHead(200, {'Content-Type':'text/html'});
      response.end('parsedQuery : ' + parsedQuery);
  });

});

server.listen(8080, function() {
  console.log('Server running...');
});
