"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

const PAGE_TITLES: Record<string, Record<string, string>> = {
	"/sign-in": {
		title: "Welcome 👋",
		description: "Please login here",
	},
	"/sign-up": {
		title: "Create New Account",
		description: "Please enter details",
	},
	"/forgot-password": {
		title: "Forgot password",
		description:
			"Enter your registered phone number or email address. we'll send you a code to reset your password.",
	},
	"/verify-otp": {
		title: "Enter OTP",
		description:
			"We have shared a code of your registered email address jack@gmail.com",
	},
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const title = PAGE_TITLES[pathname].title || "";
	const description = PAGE_TITLES[pathname].description || "";
	const isSignUp = pathname === "/sign-up";

	return (
		<div className="w-full min-h-screen flex items-center justify-center">
			<div className="flex flex-col gap-8 max-w-[600px] min-w-[500px]">
				<div className="flex flex-col gap-3">
					<h1 className="text-3xl font-bold leading-[100%]">{title}</h1>
					<p className="text-md font-normal leading-[100%] text-gray-500">
						{description}
					</p>
				</div>

				{children}

				{(pathname === "/sign-up" || pathname === "/sign-in") && (
					<p className="text-lg leading-6 font-normal tracking-wide text-center">
						{isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
						<Link
							href={isSignUp ? "/sign-in" : "/sign-up"}
							className="font-semibold underline hover:text-blue-500"
						>
							{isSignUp ? "Log in" : "Sign up"}
						</Link>
					</p>
				)}
			</div>
		</div>
	);
};

export default AuthLayout;
