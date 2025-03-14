"use client";

import type React from "react";

import FormInput from "@/components/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/tools";
import useForgotPasswordFeatures from "./featues";

const ForgotPasswordPageComponent: React.FC = () => {
	const { form, hasErrors, handleFormSubmit } = useForgotPasswordFeatures();
	const { isSubmitting } = form.formState;

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleFormSubmit)}
				className="flex flex-col gap-4"
			>
				{/* Identifier Field */}
				<FormInput
					form={form}
					name="identifier"
					label="Phone Number or Email"
				/>

				{/* Button */}
				<Button
					type="submit"
					disabled={isSubmitting}
					className={cn(hasErrors && "button-error", "mt-4")}
				>
					{isSubmitting ? <LoadingSpinner /> : ""}{" "}
					{isSubmitting ? "Sending OTP..." : "Send OTP"}
				</Button>
			</form>
		</Form>
	);
};

export default ForgotPasswordPageComponent;
