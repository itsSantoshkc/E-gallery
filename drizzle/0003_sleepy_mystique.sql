CREATE TABLE `shippingAddress` (
	`userId` varchar(255) NOT NULL,
	`province` varchar(255),
	`address` varchar(255),
	CONSTRAINT `shippingAddress_userId` PRIMARY KEY(`userId`)
);
--> statement-breakpoint
ALTER TABLE `shippingAddress` ADD CONSTRAINT `shippingAddress_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;