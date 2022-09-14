# Testi 


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Miika:<M.i.i.k.a6>@cluster0.fdgqsic.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
