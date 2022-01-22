import nc from "next-connect";
import middleware from "../../../middleware/all";
import onError from "../../../middleware/error";
import { product } from "../../../db";
import { IRequest } from "../../../types";

const handler = nc({
  onError,
});
handler.use(middleware);
handler.put(async (req: IRequest, res) => {
  const updatedProduct = await product.updateProduct(
    req.db,
    req.query.id as string,
    req.body
  );

  res.send({ data: updatedProduct });
});

export default handler;
