import type { Metadata } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
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
		<html lang="en">
			<body>
				<Providers>
					<NavBar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
