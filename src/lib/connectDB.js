const { MongoClient, ServerApiVersion } = require("mongodb");

let db;
export const connectDB = async () => {
  if(db) return db;
  try{
    const uri = process.env.NEXT_DB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      }
    })
    db = client.db('NextDB')
    return db;
  }catch(err){
    console.log(err);
  }
}
