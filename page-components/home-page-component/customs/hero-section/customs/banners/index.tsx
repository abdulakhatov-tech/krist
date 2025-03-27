import Autoplay from "embla-carousel-autoplay";
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
		<div>
			<Carousel
				plugins={[
					Autoplay({
						delay: 2500,
					}),
				]}
				opts={{
					loop: true,
				}}
			>
				<CarouselContent>
					{banners?.map((banner) => (
						<BannerItem key={banner?._id} banner={banner} />
					))}
				</CarouselContent>
				<CarouselPrevious className="top-64 md:top-90 left-5" />
				<CarouselNext className="top-64 md:top-90 right-5" />
			</Carousel>
		</div>
	);
};

export default Banners;
