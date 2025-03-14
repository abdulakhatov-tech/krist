"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import FormCheckbox from "@/components/form-checkbox";
import FormInput from "@/components/form-input";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/tools";
import useSignUpFeatures from "./features";

const SignUpPageComponent: React.FC = () => {
	const { form, hasErrors, handleFormSubmit } = useSignUpFeatures();
	const { isSubmitting } = form.formState;

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleFormSubmit)}
				className="flex flex-col gap-4"
			>
				{/* First Name Field */}
				<FormInput form={form} name="firstName" label="First Name" />

				{/* Last Name Field */}
				<FormInput form={form} name="lastName" label="Last Name" />

				{/* Identifier Field */}
				<FormInput
					form={form}
					name="identifier"
					label="Phone Number or Email"
				/>

				{/* Password Field */}
				<FormInput
					form={form}
					name="password"
					type="password"
					label="Password"
				/>

				<FormCheckbox
					form={form}
					name="isAgree"
					label="I agree to the Terms & Conditions"
				/>

				{/* Button */}
				<Button
					type="submit"
					disabled={isSubmitting}
					className={cn(hasErrors && "button-error", "mt-4")}
				>
					{isSubmitting ? <LoadingSpinner /> : ""}{" "}
					{isSubmitting ? "Signing up..." : "Sign Up"}
				</Button>
			</form>
		</Form>
	);
};

export default SignUpPageComponent;
