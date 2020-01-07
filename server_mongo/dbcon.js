var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function(error, db) {
  if( error ) {
    console.log(error);
  } else {
    console.log('Connected : ' + db);
    db.close();
  }
});
