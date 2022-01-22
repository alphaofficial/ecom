import { NextApiRequest, NextApiResponse } from "next";
import { getProduct, updateProduct } from "../../../db/resources/product";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getProduct(req.query.id as string);
    case "PUT":
      return updateProduct(req.query.id as string, req.body);
    default:
      return res.status(405).end();
  }
};
export default handler;
