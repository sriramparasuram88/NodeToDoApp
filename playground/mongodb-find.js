  //const MongoClient = require('mongodb').MongoClient;
  const {MongoClient, ObjectID} = require('mongodb');
  // this is a regular object id
  //var obj  = new ObjectID();
  //console.log(obj);

  MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
    if(err)
    {
      return console.log('Unable to connect to mongo db server');
    }

    console.log('Connected to mongodb server');
    db.collection('Todos').find({_id :
      new ObjectID('5a14d70fffe7c83d747c1539')}
    ).toArray().then((docs) => {
      console.log('Todos are');
      console.log(JSON.stringify(docs, undefined,2));
    }, (error) => {
      if(error){
        console.log('Error occured',error);
      }
    } );

    db.collection('Users').find({name:"Sriram P"}
    ).toArray().then((docs) => {
      console.log('Users with name');
      console.log(JSON.stringify(docs, undefined,2));
    }, (error) => {
      if(error){
        console.log('Error occured',error);
      }
    } );



    });
    //db.close();


  //});
