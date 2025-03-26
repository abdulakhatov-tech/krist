import Link from "next/link";
import type React from "react";

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type { ICategoryItem } from "@/interfaces/category.interface";
import SubCategoryList from "./SubCategoryList";

const CategoryAccordionItem: React.FC<{ category: ICategoryItem }> = ({
	category,
}) => {
	const hasChildren = Boolean(category?.children?.length);

	return (
		<AccordionItem value={category._id} className="border-b-0">
			{hasChildren ? (
				<>
					<AccordionTrigger className="hover:no-underline py-2 px-4 hover:bg-[#222] hover:text-white hover:scale-[0.97] rounded data-[state=open]:bg-[#222] data-[state=open]:text-white">
						<div className="flex items-center justify-between w-full">
							<span className="text-lg font-normal">{category.title}</span>
						</div>
					</AccordionTrigger>
					<AccordionContent className="pl-3 pt-1">
						{category.children && (
							<SubCategoryList subCategories={category.children} />
						)}
					</AccordionContent>
				</>
			) : (
				<Link
					href={`/shop/${category.slug}`}
					className="flex justify-between items-center py-2 px-4 hover:bg-[#222] hover:text-white hover:scale-[0.97] transition-all duration-75 rounded w-full"
				>
					<span className="text-lg font-normal">{category.title}</span>
				</Link>
			)}
		</AccordionItem>
	);
};

export default CategoryAccordionItem;
