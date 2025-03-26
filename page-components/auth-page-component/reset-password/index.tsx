"use client";

import type React from "react";

import FormInput from "@/components/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/tools";
import { SuccessModal } from "./customs";
import useResetPasswordFeatures from "./features";

const ResetPasswordPageComponent = () => {
	const { form, hasErrors, handleFormSubmit } = useResetPasswordFeatures();
	const { isSubmitting } = form.formState;

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleFormSubmit)}
					className="flex flex-col gap-4"
				>
					{/* New Password */}
					<FormInput
						form={form}
						name="newPassword"
						label="New Password"
						type="password"
					/>

					{/* Button */}
					<Button
						type="submit"
						disabled={isSubmitting}
						className={cn(hasErrors && "button-error", "mt-4")}
					>
						{isSubmitting ? <LoadingSpinner /> : ""}{" "}
						{isSubmitting ? "Resetting..." : "Reset Password"}
					</Button>
				</form>
			</Form>

			<SuccessModal />
		</>
	);
};

export default ResetPasswordPageComponent;
