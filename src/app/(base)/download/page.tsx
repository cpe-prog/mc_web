/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Download() {
	const [isDisabled, setIsDisabled] = useState(false);
	const [timer, setTimer] = useState(15);
	const route = useRouter();

	useEffect(() => {
		setIsDisabled(true);
		startCountdown();
	}, []);

	const handleDownload = async () => {
		const response = await fetch("/app-release.apk");

		try {
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "app-release.apk"; // Change the name to what you want
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
			route.push("/");
		} catch (error) {
			console.error("Error downloading file:", error);
			setIsDisabled(true);
			startCountdown();
		}
	};

	const startCountdown = () => {
		setTimer(15); // Reset countdown to 15 seconds
		const countdownTimer = setInterval(() => {
			setTimer((prev) => {
				if (prev === 1) {
					clearInterval(countdownTimer);
					setIsDisabled(false);
					handleDownload();
					return 15; // Reset for future use
				}
				return prev - 1;
			});
		}, 1000);
		// Decrease every second
	};
	return (
		<div className="flex h-screen w-full justify-center items-center px-20">
			<main className="flex-grow flex flex-col items-center justify-center">
				<div className="max-w-md mx-auto rounded-lg border shadow-lg p-6 text-center">
					<h2 className="text-2xl font-semibold  mb-2">Download Your File</h2>
					<p className=" mb-4">
						Click the button below to download your important document. Ensure
						you have the necessary permissions to access this file.
					</p>
					<Button disabled={isDisabled} type="button" onClick={handleDownload}>
						{isDisabled
							? `Please wait ${timer} seconds`
							: "Click here to download"}
					</Button>
				</div>
			</main>
		</div>
	);
}
