import type { ISubCategoryItem } from "@/interfaces/category.interface";
import type { AxiosInstance } from "axios";
import { useAxios } from "../api/axios.service";

const createCategoriesService = ($axios: AxiosInstance) => ({
	async fetchCategories(): Promise<ISubCategoryItem[]> {
		const { data } = await $axios.get("/categories");

		return data.data;
	},
});

export const useCategoriesService = () => {
	const axiosInstance = useAxios();

	return createCategoriesService(axiosInstance);
};
