"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { Banners, CategoryList } from "./customs";

const HeroSection: React.FC = () => {
	const searchParams = useSearchParams();

	const params = new URLSearchParams(searchParams.toString());

	return (
		<section
			className={cn(params.has("search") ? "md:pt-2 pb-4" : "md:pt-8 pb-4")}
		>
			<div className="container">
				<div className="grid md:grid-cols-[260px_1fr] gap-2">
					{/* Categories */}
					<div className="hidden md:block">
						<CategoryList />
					</div>

					{/* Banners */}
					<Banners />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
