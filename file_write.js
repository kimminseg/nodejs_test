var fs = require('fs');

var writeData = "This is FileSystem and write.js";

// 비동기 방식으로 파일을 생성
fs.writeFile('file01_async.txt', writeData, 'utf-8', function(e) {

  if(e) {
    console.log('event : '+ e);
  } else {
    console.log('01 WRITE DONE !');
  }

});

/*
 동기방식으로 파일을 생성,
 callback 함수를 통한 오류처리가 불가하여 try/catch사
*/
try {
  fs.writeFileSync('file02_sync.txt', writeData, 'utf-8');
  console.log('02 WRITE DONE !');
}catch(e) {
  console.log(e);
}
