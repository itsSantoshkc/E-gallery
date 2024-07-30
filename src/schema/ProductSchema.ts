import {
  boolean,
  int,
  timestamp,
  mysqlTable,
  primaryKey,
  varchar,
  float,
} from "drizzle-orm/mysql-core";
import { users } from "./userSchema";

export const product = mysqlTable("product", {
  id: varchar("id", { length: 255 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }),
  price: float("price").notNull(),
  description: varchar("description", { length: 500 }),
  availableQuantity: int("availableQuantity"),
  OwnerId: varchar("OwnerId", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const product_genre = mysqlTable("product_genre", {
  productId: varchar("productId", {
    length: 255,
  })
    .notNull()
    .references(() => product.id, { onDelete: "cascade" }),
  genre: varchar("genre", {
    length: 255,
  }),
});

export const product_image = mysqlTable("product_image", {
  productId: varchar("productId", {
    length: 255,
  })
    .notNull()
    .references(() => product.id, { onDelete: "cascade" }),
  image: varchar("image", {
    length: 255,
  }),
});
