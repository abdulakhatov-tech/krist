"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

import { Toaster } from "@/components/ui/sonner";
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

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider store={authStore}>
			<QueryClientProvider client={queryClient}>
				<StoreProvider>
					{children}
					<ReactQueryDevtools initialIsOpen={false} />
					<Toaster />
				</StoreProvider>
			</QueryClientProvider>
		</AuthProvider>
	);
}

// const refreshToken = async () => {}
