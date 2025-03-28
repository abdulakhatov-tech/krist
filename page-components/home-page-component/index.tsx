import type React from "react";

import SearchBar from "@/components/search-bar";
import { Separator } from "@/components/ui/separator";
import { BrowseByCategory, HeroSection } from "./customs";

const HomePageComponent: React.FC = () => {
	return (
		<>
			<SearchBar />
			<HeroSection />
			<div className="container">
				<Separator className="my-4 sm:my-6 md:my-8 lg:my-10" />
			</div>
			<BrowseByCategory />
		</>
	);
};

export default HomePageComponent;
