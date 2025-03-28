import { Heart, Search, ShoppingBasket } from "lucide-react";

import type { NavActionType, NavItemType } from "@/types/navbar.type";

export const navItems: NavItemType[] = [
	{
		_id: "1",
		path: "/",
		title: "Home",
	},
	{
		_id: "2",
		path: "/shop",
		title: "Shop",
	},
	{
		_id: "3",
		path: "/about",
		title: "About",
	},
	{
		_id: "4",
		path: "/contact-us",
		title: "Contact Us",
	},
	{
		_id: "5",
		path: "/dashboard",
		title: "Dashboard",
	},
];

export const navActions: NavActionType[] = [
	{
		_id: "1",
		Icon: Search,
		title: "Search",
		type: "search",
	},
	{
		_id: "2",
		Icon: Heart,
		title: "Favorites",
		type: "favorites",
	},
	{
		_id: "3",
		Icon: ShoppingBasket,
		title: "Shopping Cart",
		type: "shopping-cart",
	},
];
