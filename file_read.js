// use file system module
var fs = require('fs');

// 비동기 방식 파일읽기
fs.readFile('home.js', 'utf-8', function(error, data) {
  console.log('01 readAsync : ' + data)
});

// 동기방식의 파일읽기
var data = fs.readFileSync('home.js', 'utf-8');
console.log('02 readSync : ' + data);
