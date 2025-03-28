import type { ICategoryItem } from "@/interfaces/category.interface";

export const categories: ICategoryItem[] = [
	{
		id: "1",
		name: "Women's Fashion",
		slug: "womens-fashion",
		image_url: "",
		subcategories: [
			{
				id: "1-1",
				name: "Clothing",
				slug: "clothing",
				image_url: "",
			},
			{
				id: "1-2",
				name: "Shoes",
				slug: "shoes",
				image_url: "",
			},
			{
				id: "1-3",
				name: "Accessories",
				slug: "accessories",
				image_url: "",
			},
		],
	},
	{
		id: "2",
		name: "Men's Fashion",
		slug: "mens-fashion",
		image_url: "",
		subcategories: [
			{
				id: "2-1",
				name: "Clothing",
				slug: "clothing",
				image_url: "",
			},
			{
				id: "2-2",
				name: "Footwear",
				slug: "footwear",
				image_url: "",
			},
			{
				id: "2-3",
				name: "Watches",
				slug: "watches",
				image_url: "",
			},
		],
	},
	{
		id: "3",
		name: "Electronics",
		slug: "electronics",
		image_url: "",
		subcategories: [
			{
				id: "3-1",
				name: "Mobile Phones",
				slug: "mobile-phones",
				image_url: "",
			},
			{
				id: "3-2",
				name: "Laptops",
				slug: "laptops",
				image_url: "",
			},
		],
	},
	{
		id: "4",
		name: "Home & Lifestyle",
		slug: "home-lifestyle",
		image_url: "",
		subcategories: [],
	},
	{
		id: "5",
		name: "Medicine",
		slug: "medicine",
		image_url: "",
		subcategories: [],
	},
	{
		id: "6",
		name: "Sports & Outdoor",
		slug: "sports-outdoor",
		image_url: "",
		subcategories: [],
	},
	{
		id: "7",
		name: "Baby & Toys",
		slug: "baby-toys",
		image_url: "",
		subcategories: [],
	},
	{
		id: "8",
		name: "Groceries & Pets",
		slug: "groceries-pets",
		image_url: "",
		subcategories: [],
	},
	{
		id: "9",
		name: "Health & Beauty",
		slug: "health-beauty",
		image_url: "",
		subcategories: [],
	},
];
