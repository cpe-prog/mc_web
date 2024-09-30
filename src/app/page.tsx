import { Button } from "@nextui-org/react";
import Link from "next/link";

import BG from "@/public/bg-app.png";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-white flex flex-col items-center justify-center">
			<div className="text-center">
				<Image
					src={BG} // Replace with your app image path
					alt="Multi_Care"
					width={300}
					height={300}
					className="mx-auto mb-8"
				/>
				<h1 className="text-primary mb-4">Elderly Blood Pressure Monitor</h1>
				<p className="text-secondary mb-8">
					Keep track of your blood pressure easily and accurately.
				</p>
				<Link href="/download" passHref>
					<Button color="primary">Download Here</Button>
				</Link>
			</div>
		</div>
	);
}
