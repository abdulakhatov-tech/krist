"use client";

import { verifyOTPFormSchema } from "@/schema-validators/auth/verifyOTPFormSchema";
import { useAuthService } from "@/services/auth/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

type OtpType = { otpCode: string; expiresIn: number };

const useVerifyOTPFeatures = () => {
	const router = useRouter();
	const { verifyOTP } = useAuthService();

	const [otpData, setOtpData] = useState<OtpType | null>();
	const [timeLeft, setTimeLeft] = useState(0);

	useEffect(() => {
		const otp = JSON.parse(
			localStorage.getItem("otp_code") as string,
		) as OtpType | null;

		if (otp && otp.expiresIn > Date.now()) {
			setOtpData(otp);
			setTimeLeft(otp.expiresIn - Date.now());

			const interval = setInterval(() => {
				const remainingTime = otp.expiresIn - Date.now();
				setTimeLeft(remainingTime > 0 ? remainingTime : 0);

				if (remainingTime <= 0) {
					localStorage.removeItem("otp_code");
					clearInterval(interval);
				}
			}, 1000);

			return () => clearInterval(interval);
		}

		localStorage.removeItem("otp_code");
	}, []);

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
			const { success, message } = await verifyOTP({
				otpCode: values.otpCode,
				identifier: "islomjonabdulakhatov6975@gmail.com",
			});

			if (success) {
				toast(message || "Enter new password!");

				reset();
				localStorage.removeItem("otp_code");
				router.push("/reset-password");
			} else {
				router.push("/forgot-password");
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				const errorMessage = error?.response?.data?.message;
				toast.error(errorMessage);
			}
		}
	};

	const formatTime = (ms: number) => {
		const seconds = Math.floor((ms / 1000) % 60);
		const minutes = Math.floor((ms / 1000 / 60) % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	return { form, hasErrors, handleFormSubmit, otpData, timeLeft, formatTime };
};

export default useVerifyOTPFeatures;
