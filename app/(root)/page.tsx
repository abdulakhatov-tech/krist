import HomePageComponent from "@/page-components/home-page-component";
import { LoadingSpinner } from "@/tools";
import { Suspense } from "react";

export default function Home() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<HomePageComponent />
		</Suspense>
	);
}
