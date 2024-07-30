ALTER TABLE `cart` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `cart` ADD `id` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `cart` ADD `itemQuantity` int;--> statement-breakpoint
ALTER TABLE `cart` ADD `itemPrice` float;