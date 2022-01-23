import { IQuery } from "../../types";
import { connectToDB } from "../connect";

export const getProduct = async (id: string) => {
  let { db } = await connectToDB();
  return await db.collection("products").findOne({ _id: id });
};

export const getProducts = async (queries?: IQuery) => {
  let sortParams: any = {};
  if (queries) {
    sortParams[queries.sortValue as string] = Number(queries.sortOrder);
  }
  let { db } = await connectToDB();
  return await db.collection("products").find({}).sort(sortParams).toArray();
};

export const createProduct = async (product: any) => {
  let { db } = await connectToDB();
  return db
    .collection("products")
    .insertOne({
      ...product,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    })
    .then((product) => product);
};

export const updateProduct = async (id: string, updates: any) => {
  let { db } = await connectToDB();
  const operation = await db.collection("products").updateOne(
    {
      _id: id,
    },
    { $set: updates }
  );

  if (!operation.acknowledged) {
    throw new Error("Could not update document");
  }

  const updated = await db.collection("products").findOne({ _id: id });
  return updated;
};
