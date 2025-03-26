export interface ICategoryItem {
	_id: string;
	title: string;
	slug: string;
	children?: ISubCategoryItem[] | null;
}

export interface ISubCategoryItem {
	_id: string;
	title: string;
	slug: string;
}
