import { signUpFormSchema } from "@/schema-validators/auth/signUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const useSignUpFeatures = () => {
	const form = useForm<z.infer<typeof signUpFormSchema>>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			identifier: "",
			password: "",
			isAgree: false,
		},
	});

	const { reset, formState } = form;
	const hasErrors = Object.keys(formState.errors).length > 0;

	const handleFormSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
		try {
			console.log(values, "values");
		} catch (error) {
			console.log("ERROR -> :", error);
		}
	};

	return { form, hasErrors, handleFormSubmit };
};

export default useSignUpFeatures;
