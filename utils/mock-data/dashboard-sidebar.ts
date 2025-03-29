import {
	Activity,
	ChartColumnStacked,
	Home,
	Palette,
	PencilRuler,
	Settings,
	ShieldUser,
	ShoppingCart,
	Users,
} from "lucide-react";

export interface DashboardSidebarItemType {
	title: string;
	url: string;
	icon: React.ComponentType<{ className?: string }>;
}

export const dashboardSidebarItems: DashboardSidebarItemType[] = [
	{
		title: "Home",
		url: "/dashboard",
		icon: Home,
	},
	{ title: "Admins", url: "/dashboard/admins", icon: ShieldUser },
	{ title: "Sellers", url: "/dashboard/sellers", icon: ShieldUser },
	{ title: "Customers", url: "/dashboard/customers", icon: Users },
	{ title: "Products", url: "/dashboard/products", icon: ShoppingCart },
	{
		title: "Categories",
		url: "/dashboard/categories",
		icon: ChartColumnStacked,
	},
	{
		title: "Subcategories",
		url: "/dashboard/subcategories",
		icon: ChartColumnStacked,
	},
	{ title: "Sizes", url: "/dashboard/sizes", icon: PencilRuler },
	{ title: "Colors", url: "/dashboard/colors", icon: Palette },
	{ title: "Stocks", url: "/dashboard/stocks", icon: Activity },
	{ title: "Settings", url: "/dashboard/settings", icon: Settings },
];
