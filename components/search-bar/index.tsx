"use client";

import { useSearchParams } from "next/navigation";
import type React from "react";

import { cn } from "@/lib/utils";
import { CategoryListModal } from "@/page-components/home-page-component/customs/hero-section/customs";
import { Input } from "../ui/input";

const SearchBar: React.FC = () => {
	const searchParams = useSearchParams();

	const params = new URLSearchParams(searchParams.toString());

	return (
		<section
			id="search-bar"
			className={cn(params.has("search") ? "block" : "md:hidden", "py-4")}
		>
			<div className="container">
				<div className="grid grid-cols-[1fr_auto] md:grid-cols-1 gap-4">
					<Input
						placeholder="Search..."
						className="max-w-[400px] lg:max-w-[550px] mx-auto"
					/>
					<CategoryListModal />
				</div>
			</div>
		</section>
	);
};

export default SearchBar;
