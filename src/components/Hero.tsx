import { Container } from "@/components/Container";
import heroImg from "@/public/bg-app.png";
import Image from "next/image";

export const Hero = () => {
	return (
		<div>
			<Container className="flex flex-wrap ">
				<div className="flex items-center w-full lg:w-1/2">
					<div className="max-w-2xl mb-8">
						<h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
							Welcome to Multi Care
						</h1>
						<p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
							We are so glad to help you and make your life easier by using our
							application with provided device for automating of blood pressure
							checking, without going to the health center.
						</p>

						<div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
							<a
								href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
								target="_blank"
								rel="noopener"
								className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
							>
								Download for Free
							</a>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center w-full lg:w-1/2">
					<div className="bg-slate-400 rounded-lg p-1 pt-2 pb-2">
						<Image
							src={heroImg}
							width="206"
							height="207"
							className={"object-cover rounded-lg border-1 border-black"}
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
