import type {
	ICategoryItem,
	ISubCategoryItem,
} from "@/interfaces/category.interface";
import type { AxiosInstance } from "axios";
import { useAxios } from "../api/axios.service";

const createCategoriesService = ($axios: AxiosInstance) => ({
	async fetchCategories(): Promise<ICategoryItem[]> {
		try {
			const { data } = await $axios.get("/categories");
			return data.data;
		} catch (error) {
			throw new Error("Failed to fetch categories.");
		}
	},

	async fetchSubCategoriesByCategory(
		categorySlug: string,
	): Promise<ISubCategoryItem[]> {
		try {
			const { data } = await $axios.get(
				`/categories/${categorySlug}/subcategories`,
			);
			return data.data;
		} catch (error) {
			throw new Error("Failed to fetch subcategories.");
		}
	},
});

export const useCategoriesService = () => {
	const axiosInstance = useAxios();

	return createCategoriesService(axiosInstance);
};
