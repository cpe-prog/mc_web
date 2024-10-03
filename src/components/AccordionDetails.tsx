import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "./Container";

export const AccordionDetails = () => {
	return (
		<Container>
			<div className="w-full max-w-2xl p-2 mx-auto">
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>
							Is this application applicable for any devices?
						</AccordionTrigger>
						<AccordionContent>
							No, for now we are only supported android devices, we are hoping
							to have supported to upgrade our application on deffirent devices
							including apple brand.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>What is your refund policy?</AccordionTrigger>
						<AccordionContent>
							If you&apos;re unhappy with your purchase for any reason, email us
							within 90 days and we&apos;ll refund you in full, no questions
							asked.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Do you offer technical support?</AccordionTrigger>
						<AccordionContent>
							No, we don&apos;t offer technical support for free downloads.
							Please purchase a support plan to get 6 months of support.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</Container>
	);
};
