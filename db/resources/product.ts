import { Db } from "mongodb";
import { nanoid } from "nanoid";

export const getProduct = async (db: Db, id: string) => {
  return db.collection("product").findOne({ _id: id });
};

export const getProducts = async (db: Db, folderId: string) => {
  return db.collection("product").find({ folder: folderId }).toArray();
};

export const createProduct = async (db: Db, product: any) => {
  return db
    .collection("product")
    .insertOne({
      _id: nanoid(12),
      ...product,
      createdAt: new Date().toDateString(),
    })
    .then((product) => product);
};

export const updateProduct = async (db: Db, id: string, updates: any) => {
  const operation = await db.collection("product").updateOne(
    {
      _id: id,
    },
    { $set: updates }
  );

  console.log({ operation });

  if (!operation.acknowledged) {
    throw new Error("Could not update document");
  }

  const updated = await db.collection("product").findOne({ _id: id });
  return updated;
};
