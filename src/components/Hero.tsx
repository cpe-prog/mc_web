import { Container } from "@/components/Container";
import heroImg from "@/public/bg-app.png";
import Image from "next/image";

export const Hero = () => {
	return (
		<div className="mt-14">
			<Container className="flex xs:text-center sm:text-center md:text-center text-left flex-wrap justify-between lg:text-left">
				<div className="flex xs:w-full sm:w-full md:w-full items-center xs:justify-center sm:justify-center md:justify-center justify-start xs: lg:w-1/2">
					<div className="max-w-2xl mb-8">
						<h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
							Welcome to Multi Care
						</h1>
						<p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
							We are so glad to help you and make your life easier by using our
							application with provided device for automating of blood pressure
							checking, without going to the health center.
						</p>

						<div className="flex sm:items-center sm:justify-center md:justify-center xs:justify-center">
							<a
								href="/download"
								rel="noopener"
								className="px-8 py-4 text-lg max-w-[300px] font-medium text-center text-white bg-indigo-600 rounded-md "
							>
								Download for Free
							</a>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center xs:w-full sm:w-full md:w-full lg:w-1/2">
					<div className="bg-slate-900 rounded-lg p-1 pt-3 pb-3">
						<div className="bg-black border-2 border-slate-400 rounded-full w-3 h-3 absolute mt-1 ml-[123px]">
							<span className="bg-white rounded-full w-2 h-2"></span>
						</div>
						<Image
							src={heroImg}
							width="250"
							height="207"
							className={"object-cover rounded-lg border-2 border-black"}
							alt="Hero Illustration"
							loading="eager"
							placeholder="blur"
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};
