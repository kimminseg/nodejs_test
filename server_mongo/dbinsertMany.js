var Client = require('mongodb').MongoClient

Client.connect('mongodb://localhost:27017/school', function(error, db) {
  if(error) {
    console.log(error);
  } else {
    var jordan = {name:'Jordan', age:16, gender:'M'}
    var amanda = {name:'Amanda', age:17, gender:'F'};
    var jessica = {name:'Jessica', age:15, gender:'F'};
    var james = {name:'James', age:19, gender:'M'};
    var catherine = {name:'Catherine', age:18, gender:'F'};

    db.collection('student').insertMany([jordan,amanda,jessica,james,catherine]);
    db.close();
  }
});
