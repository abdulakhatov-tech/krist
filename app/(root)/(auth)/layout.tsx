import type React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full min-h-screen flex items-center justify-center">
			<div className="flex flex-col gap-8 max-w-[600px] min-w-[500px]">
				<div className="flex flex-col gap-3">
					<h1 className="text-3xl font-bold leading-[100%]">
						Create New Account
					</h1>
					<p className="text-md font-normal leading-[100%] text-gray-500">
						Please enter details
					</p>
				</div>

				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
