import React from "react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";
import Link from "next/link";

const SuccessModal = () => {
	return (
		<Dialog>
			{/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
			<DialogContent>
				<DialogHeader>
					<div className="p-3 bg-[#1311180d] w-fit rounded-full mx-auto mb-5 mt-6">
						<div className="p-3 bg-[#1311181A] w-fit rounded-full">
							<div className="w-16 h-16 rounded-full bg-black center">
								<div className="w-6 h-6 rounded-full bg-white center">
									<Check />
								</div>
							</div>
						</div>
					</div>

					<DialogTitle className="text-2xl font-bold leading-[100%] text-center">
						Password Changed Successfully
					</DialogTitle>
					<DialogDescription className="text-md font-normal text-center">
						Your password has been updated successfully
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="mt-[30px]">
					<Link href="/sign-in" className="w-full">
						<Button type="submit" className="w-full h-12">
							Back to Login
						</Button>
					</Link>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default SuccessModal;
