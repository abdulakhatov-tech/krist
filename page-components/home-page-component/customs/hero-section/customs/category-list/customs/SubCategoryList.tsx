import type { ISubCategoryItem } from "@/interfaces/category.interface";
import SubCategoryListItem from "./SubCategoryListItem";

const SubCategoryList: React.FC<{ subCategories: ISubCategoryItem[] }> = ({
	subCategories,
}) => {
	return (
		<ul>
			{subCategories.map((subCategory) => (
				<SubCategoryListItem key={subCategory.id} subCategory={subCategory} />
			))}
		</ul>
	);
};

export default SubCategoryList;
