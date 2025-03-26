"use client";

import type React from "react";

import { Accordion } from "@/components/ui/accordion";
import type { ICategoryItem } from "@/interfaces/category.interface";
import { categories } from "@/utils/mock-data/category";
import { CategoryAccordionItem } from "./customs";

const CategoryList: React.FC = () => {
	return (
		<aside className="hidden md:block py-10 pr-4 max-h-[500px] overflow-y-auto">
			<Accordion type="multiple" className="w-full">
				{categories?.map((category: ICategoryItem) => (
					<CategoryAccordionItem key={category?._id} category={category} />
				))}
			</Accordion>
		</aside>
	);
};

export default CategoryList;
