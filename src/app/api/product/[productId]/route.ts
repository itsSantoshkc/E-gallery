import { getProductById } from "@/data/product";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId;
  const product = await getProductById(productId);
  return Response.json(product);
}
