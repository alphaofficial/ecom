import { IQuery } from "../../types";
import { connectToDB } from "../connect";

export const getProducts = async (queries?: IQuery) => {
  let sortParams: any = {};
  if (queries) {
    sortParams[queries.sortValue as string] = Number(queries.sortOrder);
  }
  let { db } = await connectToDB();
  return await db.collection("products").find({}).sort(sortParams).toArray();
};
