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

    db.collection('Todos').update({text:"Service my Bike"},{$set:{completed:true}}, (err,result)=>{
      if(err){
        console.log('Unable to update document');
      }

      console.log(result);

    });



    //db.close();


  });
