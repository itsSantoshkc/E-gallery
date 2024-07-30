CREATE TABLE `cart` (
	`userId` varchar(255) NOT NULL,
	`productId` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `product` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255),
	`price` float NOT NULL,
	`description` varchar(500),
	`availableQuantity` int,
	`OwnerId` varchar(255) NOT NULL,
	CONSTRAINT `product_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `product_genre` (
	`productId` varchar(255) NOT NULL,
	`genre` varchar(255)
);
--> statement-breakpoint
CREATE TABLE `product_image` (
	`productId` varchar(255) NOT NULL,
	`image` varchar(255)
);
--> statement-breakpoint
ALTER TABLE `cart` ADD CONSTRAINT `cart_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `cart` ADD CONSTRAINT `cart_productId_product_id_fk` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `product` ADD CONSTRAINT `product_OwnerId_user_id_fk` FOREIGN KEY (`OwnerId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `product_genre` ADD CONSTRAINT `product_genre_productId_product_id_fk` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `product_image` ADD CONSTRAINT `product_image_productId_product_id_fk` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE cascade ON UPDATE no action;