"use client";

import type React from "react";

import CustomTooltip from "@/components/custom-tooltip";
import { cn } from "@/lib/utils";
import type { NavActionType } from "@/types/navbar.type";
import { navActions } from "@/utils/mock-data/navbar-mock";
import useNavActionsFeatures from "./features";

const NavActions: React.FC = () => {
	const { handleClick } = useNavActionsFeatures();

	return (
		<ul className="flex items-center gap-4">
			{navActions?.map(({ _id, Icon, title, type }: NavActionType) => (
				<li key={_id} className={cn(type === "search" && "hidden md:block")}>
					<CustomTooltip title={title}>
						<Icon onClick={() => handleClick(type)} />
					</CustomTooltip>
				</li>
			))}
		</ul>
	);
};

export default NavActions;
