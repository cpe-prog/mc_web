import Logo from "@/public/bp-logo.png";
import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
	return (
		<Navbar shouldHideOnScroll>
			<NavbarBrand>
				<Image
					className="shadow-md inset-2"
					width={50}
					height={50}
					src={Logo}
					alt="Multi_Care_Logo"
				/>
				<p className="font-bold text-inherit pl-2">Multi_Care</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Home
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Download
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
