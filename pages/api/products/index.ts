import { NextApiRequest, NextApiResponse } from "next";
import { createProduct, getProducts } from "../../../db/resources/product";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getProducts();
    case "POST":
      return createProduct(req.body);
    default:
      return res.status(405).end();
  }
};

export default handler;
