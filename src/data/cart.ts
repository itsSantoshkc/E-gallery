import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { cart } from "@/schema/CartSchema";
import { getProductById } from "./product";

type cart = {
  productId: string;
  userId: string;
  itemQuantity: number;
  itemPrice: number;
};

const getCartItemById = async (productId: string) => {
  const cartItem = await db
    .select()
    .from(cart)
    .where(eq(cart.productId, productId))
    .limit(1);
  if (cartItem.length > 0) {
    return cartItem[0];
  }
  return null;
};

export const deleteItemInCart = async (productId: string) => {
  return null;
};

export const getItemsInCart = async (userId: string) => {
  try {
    const cartItems = await db
      .select()
      .from(cart)
      .where(eq(cart.userId, userId));
    if (cartItems.length > 0) {
      let cartItemsArray: any = [];
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const productDetails = await getProductById(item.productId);
        const updateCartItem = { ...item, ...productDetails };
        cartItemsArray.push(updateCartItem);
      }
      return cartItemsArray;
    }
    return null;
  } catch (error: any) {
    return null;
  }
};

export const deleteCartItem = async (productId: string) => {
  try {
    await db.delete(cart).where(eq(cart.productId, productId));
  } catch (error: any) {
    return null;
  }
};

export const updateCartItemQuantity = async (
  productId: string,
  itemQuantity: number
) => {
  try {
    const itemExistsInCart = await getCartItemById(productId);
    if (itemExistsInCart) {
      const newItemQuantity = itemExistsInCart.itemQuantity
        ? itemQuantity + itemExistsInCart.itemQuantity
        : itemQuantity;
      await db
        .update(cart)
        .set({ itemQuantity: newItemQuantity })
        .where(eq(cart.productId, productId));
      const updatedCartItem = await getCartItemById(productId);
      return updatedCartItem;
    }
  } catch (error: any) {
    return null;
  }
};

export const addItemsToCart = async (cartData: cart) => {
  try {
    const itemExistsInCart = await getCartItemById(cartData.productId);
    if (itemExistsInCart) {
      updateCartItemQuantity(cartData.productId, cartData.itemQuantity);
      return;
    }
    await db.insert(cart).values({
      productId: cartData.productId,
      userId: cartData.userId,
      itemPrice: cartData.itemPrice,
      itemQuantity: cartData.itemQuantity,
    });
    return;
  } catch (error: any) {
    return null;
  }
};
