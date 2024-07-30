import { db } from "@/db/db";
import { product, product_image } from "@/schema/ProductSchema";
import { eq } from "drizzle-orm";
import { getUserById } from "./user";
import { cart } from "@/schema/CartSchema";

export const addItemsToCart = async (productId: string, userId: string) => {
  try {
    await db.insert(cart).values({
      productId: productId,
      userId: userId,
    });
    return;
  } catch (error: any) {
    return null;
  }
};

const getProductImages = async (productId: string) => {
  const productImages = await db
    .select({ image: product_image.image })
    .from(product_image)
    .where(eq(product_image.productId, productId))
    .limit(6);
  let productImageArray = [];
  for (let i = 0; i < productImages.length; i++) {
    productImageArray.push(productImages[i].image);
  }

  return productImageArray;
};

const getProductFirstImage = async (productId: string) => {
  const productImage = await db
    .select({ image: product_image.image })
    .from(product_image)
    .where(eq(product_image.productId, productId))
    .limit(1);

  return productImage[0];
};

export const getProducts = async () => {
  let products: {
    id: string;
    name: string | null;
    price: number;
    description: string | null;
    availableQuantity: number | null;
    OwnerId: string;
    image?: string | null;
    ownerName?: string | null;
  }[] = await db.select().from(product).limit(12);
  for (let i = 0; i < products.length; i++) {
    const { image } = await getProductFirstImage(products[i].id);
    const { name }: any = await getUserById(products[i].OwnerId);
    products[i] = { ...products[i], image, ownerName: name };
  }
  if (products.length > 0) {
    return products;
  }
  return null;
};
