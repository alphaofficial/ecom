import { Db, MongoClient } from "mongodb";

//@ts-ignore
global.mongo = global.mongo || {};

export const connectToDB = async () => {
  //@ts-ignore
  if (!global.mongo.client) {
    //@ts-ignore
    global.mongo.client = new MongoClient(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
    });

    console.log("connecting to DB");
    //@ts-ignore
    await global.mongo.client.connect();
    console.log("connected to DB");
  }
  //@ts-ignore
  const db: Db = global.mongo.client.db("bejamas");
  //@ts-ignore
  return { db, dbClient: global.mongo.client };
};
