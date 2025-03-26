import type { ComponentType, SVGProps } from "react";

export type NavItemType = {
	_id: string;
	path: string;
	title: string;
};

export type NavActionType = {
	_id: string;
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
	title: string;
};
