import type React from "react";
import type {
	Control,
	FieldValues,
	Path,
	UseFormReturn,
} from "react-hook-form";

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { isEmail } from "@/utils/email";
import { formatPhoneNumber } from "@/utils/phone";
import { Input } from "../ui/input";

interface FormInputProps<T extends FieldValues> {
	form: UseFormReturn<T>;
	name: Path<T>;
	label: string;
	placeholder?: string;
	type?: "text" | "password";
}

const FormInput = <T extends FieldValues>({
	form,
	type = "text",
	name,
	label,
	placeholder,
}: FormInputProps<T>) => {
	const handleIdentifier = (
		e: React.ChangeEvent<HTMLInputElement>,
		field: { onChange: (value: string) => void },
	) => {
		const value = isEmail(e.target.value)
			? e.target.value
			: formatPhoneNumber(e.target.value);

		field.onChange(value);
	};

	return (
		<FormField
			name={name}
			control={form.control as unknown as Control<T>}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							{...field}
							type={type}
							onChange={
								name === "identifier"
									? (e) => handleIdentifier(e, field)
									: field.onChange
							}
							placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
							className={cn(form.formState.errors[name] && "input-error")}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormInput;
