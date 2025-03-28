import Link from "next/link";

import type { ISubCategoryItem } from "@/interfaces/category.interface";

const SubCategoryListItem: React.FC<{ subCategory: ISubCategoryItem }> = ({
	subCategory,
}) => {
	return (
		<li>
			<Link
				href={`/shop?page=1&limit=24&subcategory=${subCategory.slug}`}
				className="block hover:bg-[#222] hover:text-white py-2 px-4 hover:scale-[0.94] transition-all duration-75 rounded"
			>
				<span className="text-lg font-normal">{subCategory.name}</span>
			</Link>
		</li>
	);
};

export default SubCategoryListItem;
