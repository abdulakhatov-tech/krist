"use client";

import type React from "react";

import CustomTooltip from "@/components/custom-tooltip";
import type { NavActionType } from "@/types/navbar.type";
import { navActions } from "@/utils/mock-data/navbar-mock";

const NavActions: React.FC = () => {
	return (
		<ul className="flex items-center gap-4">
			{navActions?.map(({ _id, Icon, title }: NavActionType) => (
				<li key={_id}>
					<CustomTooltip title={title}>
						<Icon />
					</CustomTooltip>
				</li>
			))}
		</ul>
	);
};

export default NavActions;
