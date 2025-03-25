import type { IUser } from "@/interfaces/user.interface";

export interface ISignUpPayload {
	firstName: string;
	lastName: string;
	identifier: string;
	password: string;
}

export interface ISignInPayload {
	identifier: string;
	password: string;
	rememberMe?: boolean;
}

export interface IAuthResponse {
	success: boolean;
	message: string;
	data?: {
		accessToken: string;
		refreshToken: string;
		user: IUser; // Replace with your user type
	};
}
