#!/usr/bin/env ts-node --compiler-options {\"module\":\"CommonJS\"}

import { connectToDB } from "../connect";
import { productsData } from "./productsData.js";

const createSeeData = async () => {
  try {
    const { db, dbClient } = await connectToDB();
    let operation = await db.collection("product").insertMany(productsData);
    if (!operation.acknowledged) {
      throw new Error("Could not create products");
    }
    console.log({ operation });
    dbClient.close();
  } catch (error) {
    console.log({ error });
  }
};

createSeeData();
