"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { dashboardSidebarItems } from "@/utils/mock-data/dashboard-sidebar";
import { Separator } from "../../ui/separator";

const DashboardSidebar: React.FC = () => {
	const pathname = usePathname();

	return (
		<Sidebar>
			{/* <SidebarHeader /> */}
			<SidebarContent className="bg-[#001529]">
				<SidebarGroup>
					<SidebarGroupLabel className="px-6 h-12 text-white font-sans font-semibold text-2xl">
						Admin Panel
					</SidebarGroupLabel>
					<Separator className="mb-2 bg-gray-600" />
					<SidebarGroupContent>
						<SidebarMenu>
							{dashboardSidebarItems?.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										className={cn(
											item.url === pathname && "bg-[#BC8E5B]",
											"w-full h-[40px] flex items-center gap-3 px-4 text-white rounded-lg hover:bg-[#BC8E5B] hover:text-white hover:scale-[0.94] transition-all duration-150",
										)}
									>
										<Link href={item.url || "#"} className="w-full h-full">
											<item.icon className="!w-5 !h-5" />
											<span className="font-sans text-[16px] font-normal text-white">
												{item.title}
											</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="bg-[#001529] text-white px-6">
				Version: 0.0.1
			</SidebarFooter>
		</Sidebar>
	);
};

export default DashboardSidebar;
