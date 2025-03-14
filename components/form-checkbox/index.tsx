import React from "react";
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
import { Checkbox } from "../ui/checkbox";

interface FormInputProps<T extends FieldValues> {
	form: UseFormReturn<T>;
	name: Path<T>;
	label: string;
}

const FormCheckbox = <T extends FieldValues>({
	form,
	name,
	label,
}: FormInputProps<T>) => {
	return (
		<FormField
			name={name}
			control={form.control as unknown as Control<T>}
			render={({ field }) => (
				<FormItem>
					<div className="flex items-center space-x-2">
						<FormControl>
							<Checkbox
								{...field}
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormControl>
						<FormLabel>{label}</FormLabel>
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormCheckbox;
