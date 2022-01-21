import { Db } from "mongodb";
import { nanoid } from "nanoid";

export const getProduct = async (db: Db, id: string) => {
  return db.collection("docs").findOne({ _id: id });
};

export const getProducts = async (db: Db, folderId: string) => {
  return db.collection("docs").find({ folder: folderId }).toArray();
};

export const createProduct = async (db: Db, product) => {
  return db
    .collection("docs")
    .insertOne({
      _id: nanoid(12),
      ...product,
      createdAt: new Date().toDateString(),
    })
    .then(({ ops }) => ops[0]);
};

export const updateProduct = async (db: Db, id: string, updates: any) => {
  const operation = await db.collection("docs").updateOne(
    {
      _id: id,
    },
    { $set: updates }
  );

  if (!operation.result.ok) {
    throw new Error("Could not update document");
  }

  const updated = await db.collection("docs").findOne({ _id: id });
  return updated;
};
