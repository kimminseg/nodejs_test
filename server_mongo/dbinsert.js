var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:50147/school', function(error,db) {

  if ( error ) {
    console.log(error);
  } else {
    // document 등록
    var michael = {name:'Michael', age:15, gender:'M'};
    db.collection('student').insert(michael);
    db.close();
  }
});
