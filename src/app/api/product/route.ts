//@ts-ignore

import { getProducts } from "@/data/product";

export async function GET() {
  const products = await getProducts();

  return Response.json(products);
}
