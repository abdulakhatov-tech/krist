"use client";

import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { IUser } from "@/interfaces/user.interface";
import { Button } from "../ui/button";
import { Logo, NavActions, NavItems, NavItemsMobileMode } from "./customs";

const Navbar: React.FC = () => {
	const isAuthenticated = useIsAuthenticated();
	const user = useAuthUser<IUser | null>();

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // or a loading state

	return (
		<header className="py-4 border">
			<div className="container">
				<nav className="flex items-center justify-between gap-6">
					<div className="flex items-center gap-3">
						<NavItemsMobileMode />
						<Logo />
					</div>

					{/* Nav Items */}
					<div className="hidden md:block">
						<NavItems />
					</div>

					<div className="flex items-center gap-4">
						{/* Nav Actions */}
						<NavActions />

						{isAuthenticated ? (
							<Link href="/profile">
								<Avatar className="w-10 h-10">
									<AvatarImage src={user?.profilePhoto as string} />
									<AvatarFallback className="text-[16px] bg-gray-200">
										{user?.firstName?.[0]}.{user?.lastName?.[0]}
									</AvatarFallback>
								</Avatar>
							</Link>
						) : (
							<Link href="/sign-in">
								<Button>Login</Button>
							</Link>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
