import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { House, LogOut } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="bg-[#001529] w-full h-14 px-2 flex items-center justify-between">
			<SidebarTrigger className="text-white" />

			<div className="flex items-center gap-4">
				<Link href="/">
					<House className="text-white !w-7 !h-7 hover:scale-95" />
				</Link>
				<Button
					className="bg-[#DB4444] hover:bg-[crimson] hover:scale-95"
					size={"lg"}
				>
					Logout <LogOut />
				</Button>
			</div>
		</header>
	);
};

export default Navbar;
