  //const MongoClient = require('mongodb').MongoClient;
  const {MongoClient, ObjectID} = require('mongodb');
  // this is a regular object id
  var obj  = new ObjectID();
  console.log(obj);


  var user = {name:'Sriram', age:29};
  var {name} = user;
  console.log(name);

  MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
    if(err)
    {
      return console.log('Unable to connect to mongo db server');
    }

    console.log('Connected to mongodb server');

    db.collection('Todos').insertOne({
      text:'Something to do',
      completed:false
    },(err, result)=>{
      if(err)
      {
        return console.log('Unable to insert todo',err);
      }

      console.log(JSON.stringify(result.ops,undefined,2));


    });


    db.collection('Users').insertOne({
      name:'vineet',
      age:'29',
      location:'Chennai'
    },(err, result)=>{
      if(err)
      {
        return console.log('Unable to insert User',err);
      }

      console.log(JSON.stringify(result.ops,undefined,2));
      console.log(result.ops[0]._id.getTimestamp());


    });
    db.close();


  });
