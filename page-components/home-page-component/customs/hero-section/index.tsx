import type React from "react";
import { Banners, CategoryList } from "./customs";

const HeroSection: React.FC = () => {
	return (
		<section>
			<div className="container">
				<div className="grid md:grid-cols-[300px_1fr]">
					{/* Categories */}
					<CategoryList />

					{/* Banners */}
					<Banners />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
