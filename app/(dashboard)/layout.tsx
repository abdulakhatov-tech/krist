import Navbar from "@/components/dashboard/navbar";
import DashboardSidebar from "@/components/dashboard/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type React from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<SidebarProvider>
			<DashboardSidebar />
			<main className="w-full">
				<Navbar />
				<div className="p-4" style={{ minHeight: "calc(100vh - 56px)" }}>
					{children}
				</div>
			</main>
		</SidebarProvider>
	);
};

export default DashboardLayout;
