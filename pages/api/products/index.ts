import { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "../../../db/resources/product";
import { serialize } from "../../../lib/serialize";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const queries = req.query;
  switch (req.method) {
    case "GET":
      try {
        let products = await getProducts(queries);
        return res.status(200).json({ data: serialize(products) });
      } catch (error) {
        return res.status(500).json({ error });
      }
    default:
      return res.status(405).end();
  }
};

export default handler;
