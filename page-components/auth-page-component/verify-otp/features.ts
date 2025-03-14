import { verifyOTPFormSchema } from "@/schema-validators/auth/verifyOTPFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const useVerifyOTPFeatures = () => {
	const form = useForm<z.infer<typeof verifyOTPFormSchema>>({
		resolver: zodResolver(verifyOTPFormSchema),
		defaultValues: {
			otpCode: "",
		},
	});

	const { reset, formState } = form;
	const hasErrors = Object.keys(formState.errors).length > 0;

	const handleFormSubmit = async (
		values: z.infer<typeof verifyOTPFormSchema>,
	) => {
		try {
			console.log(values, "values");
		} catch (error) {
			console.log("ERROR -> :", error);
		}
	};

	return { form, hasErrors, handleFormSubmit };
};

export default useVerifyOTPFeatures;
