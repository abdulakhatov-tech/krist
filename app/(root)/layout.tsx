"use client";

import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type React from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const isAuthenticated = useIsAuthenticated();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/sign-in");
		}
	}, [isAuthenticated, router]);

	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default RootLayout;
