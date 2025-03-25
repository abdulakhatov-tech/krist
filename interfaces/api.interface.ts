import { IUser } from "./user.interface";

export interface IApiError {
	message: string;
	statusCode?: number;
	errors?: Record<string, string[]>;
}

export interface IApiErrorResponse {
	message?: string;
	errors?: Record<string, string[] | string>;
}
