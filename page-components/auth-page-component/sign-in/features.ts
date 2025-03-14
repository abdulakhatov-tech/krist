import { signInFormSchema } from "@/schema-validators/auth/signInFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const useSignInFeatures = () => {
	const form = useForm<z.infer<typeof signInFormSchema>>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			identifier: "",
			password: "",
			rememberMe: false,
		},
	});

	const { reset, formState } = form;
	const hasErrors = Object.keys(formState.errors).length > 0;

	const handleFormSubmit = async (values: z.infer<typeof signInFormSchema>) => {
		try {
			console.log(values, "values");
		} catch (error) {
			console.log("ERROR -> :", error);
		}
	};

	return { form, hasErrors, handleFormSubmit };
};

export default useSignInFeatures;
