import type { ICategoryItem } from "@/interfaces/category.interface";

export const categories: ICategoryItem[] = [
	{
		_id: "1",
		title: "Women's Fashion",
		slug: "womens-fashion",
		children: [
			{
				_id: "1-1",
				title: "Clothing",
				slug: "clothing",
			},
			{
				_id: "1-2",
				title: "Shoes",
				slug: "shoes",
			},
			{
				_id: "1-3",
				title: "Accessories",
				slug: "accessories",
			},
		],
	},
	{
		_id: "2",
		title: "Men's Fashion",
		slug: "mens-fashion",
		children: [
			{
				_id: "2-1",
				title: "Clothing",
				slug: "clothing",
			},
			{
				_id: "2-2",
				title: "Footwear",
				slug: "footwear",
			},
			{
				_id: "2-3",
				title: "Watches",
				slug: "watches",
			},
		],
	},
	{
		_id: "3",
		title: "Electronics",
		slug: "electronics",
		children: [
			{
				_id: "3-1",
				title: "Mobile Phones",
				slug: "mobile-phones",
			},
			{
				_id: "3-2",
				title: "Laptops",
				slug: "laptops",
			},
		],
	},
	{
		_id: "4",
		title: "Home & Lifestyle",
		slug: "home-lifestyle",
		children: null,
	},
	{
		_id: "5",
		title: "Medicine",
		slug: "medicine",
		children: null,
	},
	{
		_id: "6",
		title: "Sports & Outdoor",
		slug: "sports-outdoor",
		children: null,
	},
	{
		_id: "7",
		title: "Baby & Toys",
		slug: "baby-toys",
		children: null,
	},
	{
		_id: "8",
		title: "Groceries & Pets",
		slug: "groceries-pets",
		children: null,
	},
	{
		_id: "9",
		title: "Health & Beauty",
		slug: "health-beauty",
		children: null,
	},
];
