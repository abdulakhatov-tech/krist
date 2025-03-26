"use client";

import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import StoreProvider from "./StoreProvider";

export const authStore = createStore({
	authName: "_auth",
	authType: "cookie",
	cookieDomain:
		typeof window !== "undefined" ? window.location.hostname : "localhost",
	cookieSecure:
		typeof window !== "undefined"
			? window.location.protocol === "https:"
			: process.env.NODE_ENV === "production",
});

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider store={authStore}>
			<StoreProvider>
				{children}
				<Toaster />
			</StoreProvider>
		</AuthProvider>
	);
}

// const refreshToken = async () => {}
