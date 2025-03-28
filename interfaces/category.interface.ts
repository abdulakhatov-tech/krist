export interface ICategoryItem {
	id: string;
	name: string;
	slug: string;
	image_url: string | null;
	subcategories: ISubCategoryItem[];
}

export interface ISubCategoryItem {
	id: string;
	name: string;
	slug: string;
	image_url: string | null;
}
