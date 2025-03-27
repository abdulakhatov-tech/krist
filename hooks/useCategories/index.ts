import { useCategoriesService } from "@/services/categories/categories.service";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
	const { fetchCategories } = useCategoriesService();

	return useQuery({
		queryKey: ["categories"],
		queryFn: fetchCategories,
		staleTime: 1000 * 60 * 5, // Cache for 5 minutes,
		retry: 2, // Retry twice on failure
	});
};
