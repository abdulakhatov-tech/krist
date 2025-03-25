import { resetPasswordFormSchema } from "@/schema-validators/auth/resetPasswordFormSchema";
import { useAuthService } from "@/services/auth/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

const useResetPasswordFeatures = () => {
	const router = useRouter();
	const { resetPassword } = useAuthService();

	const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
		resolver: zodResolver(resetPasswordFormSchema),
		defaultValues: {
			newPassword: "",
		},
	});

	const { reset, formState } = form;
	const hasErrors = Object.keys(formState.errors).length > 0;

	const handleFormSubmit = async (
		values: z.infer<typeof resetPasswordFormSchema>,
	) => {
		try {
			const identifier = localStorage.getItem("identifier") as string;

			if (!identifier) {
				localStorage.removeItem("identifier");
				router.push("/forgot-password");
			}

			const { success, message } = await resetPassword({
				newPassword: values.newPassword,
				identifier,
			});

			if (success) {
				toast(message || "New Password reset successfull!");
			}

			localStorage.removeItem("identifier");
			router.push("/sign-in");
		} catch (error) {
			if (error instanceof AxiosError) {
				const errorMessage = error.response?.data?.message;
				toast(errorMessage || "Failed to send OTP code!");
			}
		}
	};

	return { form, hasErrors, handleFormSubmit };
};

export default useResetPasswordFeatures;
