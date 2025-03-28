"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Carousel, CarouselContent } from "@/components/ui/carousel";

import { useSubCategoriesByCategory } from "@/hooks/useCategories";
import { Header, ListItem } from "./customs";
import Loading from "./loading";

const BrowseByCategorySecion = () => {
	const searchParams = useSearchParams();
	const categoryFromURL = searchParams.get("category") || "electronics";

	const [slug, setSlug] = useState<string>(categoryFromURL);

	const { data: subcategories, isLoading } = useSubCategoriesByCategory(slug);

	useEffect(() => {
		setSlug(categoryFromURL);
	}, [categoryFromURL]);

	return (
		<section id="browse-by-category">
			<div className="container">
				<Carousel>
					<Header isLoading={isLoading} slug={slug} />

					<CarouselContent>
						{isLoading ? (
							<Loading />
						) : (
							subcategories?.map((sub) => (
								<ListItem
									key={sub.id}
									sub={sub}
									length={subcategories?.length}
								/>
							))
						)}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};

export default BrowseByCategorySecion;
