import { addItemsToCart } from "@/data/cart";

export async function POST(
  request: Request,
  { params }: { params: { cartId: string } }
) {
  const productId = params.cartId;
  const { userId } = await request.json();
  console.log(userId, productId);
  const product = await addItemsToCart(productId, userId);
  if (product === null) {
    return Response.json({ message: "Failed to add product to the cart" });
  }
  return Response.json({ message: "Order has been placed successfully" });
}
