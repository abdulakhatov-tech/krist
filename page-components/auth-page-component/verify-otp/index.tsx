"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/tools";
import useVerifyOTPFeatures from "./features";

const VerifyOTPPageComponent: React.FC = () => {
	const { form, hasErrors, handleFormSubmit } = useVerifyOTPFeatures();
	const { isSubmitting } = form.formState;

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleFormSubmit)}
				className="flex flex-col gap-4"
			>
				<FormField
					control={form.control}
					name="otpCode"
					render={({ field }) => (
						<FormItem>
							<FormLabel>One-Time Password</FormLabel>
							<FormControl>
								<InputOTP maxLength={6} {...field}>
									<InputOTPGroup className="w-full">
										<InputOTPSlot
											index={0}
											className="w-full h-12 sm:h-14 text-lg"
										/>
										<InputOTPSlot
											index={1}
											className="w-full h-12 sm:h-14 text-lg"
										/>
										<InputOTPSlot
											index={2}
											className="w-full h-12 sm:h-14 text-lg"
										/>
										<InputOTPSlot
											index={3}
											className="w-full h-12 sm:h-14 text-lg"
										/>
										<InputOTPSlot
											index={4}
											className="w-full h-12 sm:h-14 text-lg"
										/>
										<InputOTPSlot
											index={5}
											className="w-full h-12 sm:h-14 text-lg"
										/>
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
							<FormDescription>
								Please enter the one-time password sent to your phone.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Button */}
				<Button
					type="submit"
					disabled={isSubmitting}
					className={cn(hasErrors && "button-error", "mt-4")}
				>
					{isSubmitting ? <LoadingSpinner /> : ""}{" "}
					{isSubmitting ? "Verifying OTP..." : "Verify OTP"}
				</Button>
			</form>
		</Form>
	);
};

export default VerifyOTPPageComponent;
