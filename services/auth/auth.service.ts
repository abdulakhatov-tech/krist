import type { AxiosInstance } from "axios";
import useSignOut from "react-auth-kit/hooks/useSignOut";

import { getServerAxios, useAxios } from "../api/axios.service";
import type {
	IAuthResponse,
	ISignInPayload,
	ISignUpPayload,
} from "./auth.interface";

// Auth service factory
const createAuthService = (
	axiosInstance: AxiosInstance,
	signOut?: () => void,
) => ({
	async signUp(payload: ISignUpPayload): Promise<IAuthResponse> {
		const { data } = await axiosInstance.post<IAuthResponse>(
			"/auth/sign-up",
			payload,
		);
		return data;
	},

	async signIn(payload: ISignInPayload): Promise<IAuthResponse> {
		const { data } = await axiosInstance.post<IAuthResponse>(
			"/auth/sign-in",
			payload,
		);
		return data;
	},

	async signOut(): Promise<void> {
		try {
			await axiosInstance.post("/auth/sign-out");
		} finally {
			signOut?.();
		}
	},
});

// Hook for components
export const useAuthService = () => {
	const axiosInstance = useAxios();
	const signOut = useSignOut();

	return createAuthService(axiosInstance, signOut);
};

// For server-side usage
export const getAuthService = (token?: string) => {
	const axiosInstance = getServerAxios(token);

	return createAuthService(axiosInstance);
};
