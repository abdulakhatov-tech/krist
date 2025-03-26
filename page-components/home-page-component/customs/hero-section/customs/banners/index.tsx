import type React from "react";

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { banners } from "@/utils/mock-data/banners";
import { BannerItem } from "./customs";

const Banners: React.FC = () => {
	return (
		<div className="py-4 md:pt-10">
			<Carousel>
				<CarouselContent>
					{banners?.map((banner) => (
						<BannerItem key={banner?._id} banner={banner} />
					))}
				</CarouselContent>
				<CarouselPrevious className="top-64 md:top-90 left-4" />
				<CarouselNext className="top-64 md:top-90 right-4" />
			</Carousel>
		</div>
	);
};

export default Banners;
