// mongoose 모듈 가져오기
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testDB');

// testDB사용
var db = mongoose.connection;

// 연결 실패
db.on('error', () => {
  console.log('Connection Faild');
});

/// 연결 성공
db.once('open', ()=> {
  console.log('Connected !');
});

// Schema 생성
var student = mongoose.Schema({
  name : 'string',
  address : 'string',
  age : 'number'
});

// model() 함수로 컴파일
var Student = mongoose.model('Schema', student);
console.log('Student : '+Student);
// 값 입력
var newStudent = new Student({name:'Hong Gil Dong', address:'서울시 강남구 논현동', age:'22'});
console.log('newStudent : '+newStudent);
// 데이터 저장
newStudent.save(function(error, data) {
  if(error) {
    console.log(error);
  } else {
    console.log('Saved !');
  }
});

// 레퍼런스 전체 데이터 조회
Student.find(function(error, students) {
  console.log('--- Read all ---');
  if(error){
    console.log(error);
  } else {
    console.log(students);
  }
});

// 아이디값 가져오기
Student.findOne({_id:'5e14391f35dd8c80c63743ca'}, function(error, student) {
  console.log('--- Read one ---');
  if(error) {
    console.log(error);
  } else {
    console.log(student);
  }
});

//아이디 수정
Student.findById({_id:'5e14391f35dd8c80c63743ca'}, function(error, student) {
  console.log('--- Update(PUT) ---');
  if(error){
    console.log(error);
  } else {
    student.name = '--modified--';
    student.save(function(error,modified_student) {
      if(error) {
        console.log(error);
      } else {
        console.log(modified_student);
      }
    });
  }
});

//삭제
student.remove({_id:'5e14391f35dd8c80c63743ca'}, function(error, output) {
  console.log('--- Delete ---');
  if(error) {
    console.log(error);
  }
  console.log('--- Deleted ---');
});
