import SearchBar from "@/components/search-bar";
import type React from "react";
import { HeroSection } from "./customs";

const HomePageComponent: React.FC = () => {
	return (
		<>
			<SearchBar />
			<HeroSection />
		</>
	);
};

export default HomePageComponent;
