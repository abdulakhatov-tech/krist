import { forgotPasswordFormSchema } from "@/schema-validators/auth/fogotPasswordFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const useForgotPasswordFeatures = () => {
	const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
		resolver: zodResolver(forgotPasswordFormSchema),
		defaultValues: {
			identifier: "",
		},
	});

	const { reset, formState } = form;
	const hasErrors = Object.keys(formState.errors).length > 0;

	const handleFormSubmit = async (
		values: z.infer<typeof forgotPasswordFormSchema>,
	) => {
		try {
			console.log(values, "values");
		} catch (error) {
			console.log("ERROR -> :", error);
		}
	};

	return { form, hasErrors, handleFormSubmit };
};

export default useForgotPasswordFeatures;
