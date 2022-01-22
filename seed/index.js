const MongoClient = require("mongodb").MongoClient;
const productsData = require("./productsData");
const dotenv = require("dotenv");
dotenv.config();

async function seedDB() {
  const uri = process.env.DATABASE_URL;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
  });

  try {
    await client.connect();
    console.log("Connected to database");
    const collection = client.db("bejamas").collection("products");
    await collection.drop();
    await collection.insertMany(productsData);
    console.log("Database seeded!");
    await client.close();
  } catch (err) {
    console.log(err.message);
  }
}

seedDB();
