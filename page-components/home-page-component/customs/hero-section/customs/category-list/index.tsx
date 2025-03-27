"use client";

import type React from "react";

import { Accordion } from "@/components/ui/accordion";
import { useCategories } from "@/hooks/useCategories";
import type { ICategoryItem } from "@/interfaces/category.interface";
import { cn } from "@/lib/utils";
import { CategoryAccordionItem } from "./customs";
import Loading from "./loading";

const CategoryList: React.FC = () => {
	const { data: categories, isLoading } = useCategories();

	return (
		<aside className="max-h-[400px] overflow-y-auto bg-accent p-2 h-full">
			<Accordion
				type="multiple"
				className={cn(isLoading ? "gap-2" : "gap-0", "w-full flex flex-col ")}
			>
				{isLoading ? (
					<Loading />
				) : (
					categories?.map((category: ICategoryItem) => (
						<CategoryAccordionItem key={category?.id} category={category} />
					))
				)}
			</Accordion>
		</aside>
	);
};

export default CategoryList;
