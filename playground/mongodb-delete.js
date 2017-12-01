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
    delete many
    db.collection('Users').deleteMany({name:'vineet'},(error,result)=>{
      if(error)
      {
        return console.log('Unable to delete');

      }

      console.log(result);
    });

    //find and delete
    // db.collection('Todos').findOneAndDelete({_id: new ObjectID('5a16991ccb03d01354acc273')},(error,result)=>{
    //   if(error)
    //   {
    //     return console.log('Some error has occured');
    //   }
    //   console.log(result);
    //
    //
    // });


    db.collection('Todos').findOneAndDelete({_id : new ObjectID('5a16991ccb03d01354acc272')}).then((result) => {
      console.log(result);

    });





    //db.close();


  });
