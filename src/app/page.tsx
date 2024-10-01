import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";

// import { benefitOne, benefitTwo } from "@/components/Data";
export default function Home() {
	return (
		<Container>
			<Hero />

			<SectionTitle
				preTitle="Watch a video"
				title="Learn how to fullfil your needs"
			>
				This video will guide you through our application and devices how to use
				and make this works fine
			</SectionTitle>

			<Video videoId="fZ0D0cnR88E" />

			<Faq />
			<Cta />
		</Container>
	);
}
