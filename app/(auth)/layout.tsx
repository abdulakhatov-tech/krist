"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

const PAGE_TITLES: Record<string, { title: string; description: string }> = {
	"/sign-in": {
		title: "Welcome 👋",
		description: "Please login here",
	},
	"/sign-up": {
		title: "Create New Account",
		description: "Please enter details",
	},
	"/forgot-password": {
		title: "Forgot Password",
		description:
			"Enter your registered phone number or email address. We'll send you a code to reset your password.",
	},
	"/verify-otp": {
		title: "Enter OTP",
		description: "We have sent an OTP code to your registered identifier.",
	},
	"/reset-password": {
		title: "Reset Password",
		description: "Enter your new password to regain access to your account.",
	},
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const { title = "", description = "" } = PAGE_TITLES[pathname] || {};
	const isSignUp = pathname === "/sign-up";

	const backLink =
		pathname === "/forgot-password"
			? "/sign-in"
			: pathname === "/verify-otp"
				? "/forgot-password"
				: pathname === "/reset-password"
					? "/sign-in"
					: null;

	return (
		<div className="w-full min-h-screen flex items-center justify-center container">
			<div className="flex flex-col gap-6 md:gap-8 max-w-[450px] w-full md:min-w-[500px] px-4">
				{/* Back Button */}
				{backLink && (
					<Link
						href={backLink}
						className="flex items-center gap-2 hover:text-blue-500"
					>
						<ArrowLeft />
						<h4 className="text-md font-normal leading-[100%] hover:underline">
							Back
						</h4>
					</Link>
				)}

				{/* Title & Description */}
				<div className="flex flex-col gap-3">
					<h1 className="text-3xl font-bold leading-[100%]">{title}</h1>
					<p className="hidden md:block text-md font-normal leading-[100%] text-gray-500">
						{description}
					</p>
				</div>

				{/* Auth Form */}
				{children}

				{/* Sign Up / Sign In Link */}
				{["/sign-up", "/sign-in"].includes(pathname) && (
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
