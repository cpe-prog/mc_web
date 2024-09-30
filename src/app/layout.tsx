import Nav from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "MultiCare",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="light">
			<body>
				<Providers>
					<Nav />
					{children}
				</Providers>
			</body>
		</html>
	);
}
