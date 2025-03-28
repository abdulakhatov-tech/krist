export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string | null;
	phoneNumber: string | null;
	password: string;
	role: "customer" | "admin" | "seller";
	profilePhoto: string | null;
	region: string | null;
	district: string | null;
	extraAddress: string | null;
	refreshToken: string | null;
	createdAt: string;
	updatedAt: string;
}
