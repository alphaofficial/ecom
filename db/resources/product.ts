import { connectToDB } from "../connect";

export const getProduct = async (id: string) => {
  let { db } = await connectToDB();
  return db.collection("products").findOne({ _id: id });
};

export const getProducts = async () => {
  let { db } = await connectToDB();
  return db.collection("products").find({}).toArray();
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

  console.log({ operation });

  if (!operation.acknowledged) {
    throw new Error("Could not update document");
  }

  const updated = await db.collection("products").findOne({ _id: id });
  return updated;
};
