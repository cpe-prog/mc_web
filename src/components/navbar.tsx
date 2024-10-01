"use client";
import logo from "@/public/bp-logo.png";
import Image from "next/image";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";

import { Navbar } from "@nextui-org/react";

export default function NavBar() {
	return (
		<Navbar className="w-full" shouldHideOnScroll>
			{/* <NavbarBrand>
				<Link href="/">
					<span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
						<span>
							<Image
								src={logo}
								width="60"
								alt="logo"
								height="60"
								className="w-12"
							/>
						</span>
						<b>Multi_Care</b>
					</span>
				</Link>
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
			<NavbarContent justify="end">
				<NavbarItem>
					<div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
						<ThemeChanger />
						<div className="hidden mr-3 lg:flex nav__item">
							<Link
								href="/"
								className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
							>
								Get Started
							</Link>
						</div>
					</div>
				</NavbarItem>
			</NavbarContent> */}

			<nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
				<Link href="/">
					<span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
						<span>
							<Image
								src={logo}
								width="60"
								alt="logo"
								height="60"
								className="w-12"
							/>
						</span>
						<b>Multi_Care</b>
					</span>
				</Link>
				<div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
					<ThemeChanger />
					<div className="hidden mr-3 lg:flex nav__item">
						<Link
							href="/"
							className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
						>
							Get Started
						</Link>
					</div>
				</div>
				<div className="hidden text-center lg:flex lg:items-center">
					<ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
						<li>
							<Link
								href="/"
								className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
							>
								Download
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</Navbar>
	);
}
