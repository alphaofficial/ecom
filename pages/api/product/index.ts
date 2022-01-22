import nc from "next-connect";
import middleware from "../../../middleware/all";
import onError from "../../../middleware/error";
import { product } from "../../../db";
import { IRequest } from "../../../types";

const handler = nc({
  onError,
});
handler.use(middleware);
handler.post(async (req: IRequest, res) => {
  const newProduct = await product.createProduct(req.db, {
    ...req.body,
  });

  res.send({ data: newProduct });
});

export default handler;
