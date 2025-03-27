import { ChartColumnStacked } from "lucide-react";
import type React from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CategoryList from "../category-list";

const CategoryListModal: React.FC = () => {
	return (
		<Dialog>
			<DialogTrigger className="block md:hidden">
				<ChartColumnStacked className="w-8 sm:w-9 h-8 sm:h-9" />
			</DialogTrigger>
			<DialogContent>
				<CategoryList />
			</DialogContent>
		</Dialog>
	);
};

export default CategoryListModal;
