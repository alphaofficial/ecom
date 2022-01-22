import { connectToDB } from "../db/connect";

declare global {
  namespace NodeJS {
    interface Global {
      mongo: any;
    }
  }
}
//@ts-ignore
export default async function database(req, res, next) {
  const { db, dbClient } = await connectToDB();
  req.db = db;
  req.dbClinet = dbClient;

  next();
}
