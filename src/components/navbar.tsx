"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/public/bp-logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeChanger from "./DarkSwitch";

export default function Navbar({ className }: { className: string }) {
	const navigation = ["Home", "About", "Download"];
	const [open, setOpen] = useState(false);
	const [visible, setVisible] = useState(true);

	const handleOpen = () => {
		setOpen(!open);
		setVisible(true);
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					"w-full bg-transparent backdrop-blur-lg fixed inset-x-0 z-[5000] space-x-4",
					className
				)}
			>
				<nav className="container relative flex max-w-[1280px] flex-wrap items-center justify-between py-6 px-16 mx-auto lg:justify-between xl:px-1">
					<Link href="/">
						<span className="flex items-center space-x-2 text-2xl font-medium light:text-indigo-500 dark:text-gray-100">
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

					{/* menu  */}
					<div className="hidden text-center lg:flex lg:items-center">
						<ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
							{navigation.map((menu, index) => (
								<li className="mr-3 nav__item" key={index}>
									<Link
										href="/"
										className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
									>
										{menu}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<Sheet>
						<SheetTrigger>
							<motion.div
								animate={{
									rotate: open ? 180 : 0,
								}}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
								transition={{ duration: 0.5 }}
								className="lg:hidden xs:block sm:block md:block"
							>
								<Menu className="hover:cursor-pointer" onClick={handleOpen} />
							</motion.div>
						</SheetTrigger>
						<SheetContent side="top" className="h-[300px]">
							<SheetHeader>
								<SheetDescription></SheetDescription>
							</SheetHeader>
							<div className=" text-left">
								<ul className="items-center justify-end flex flex-col pt-6">
									{navigation.map((menu, index) => (
										<li className="mr-3 nav__item" key={index}>
											<Link
												href="/"
												className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
											>
												{menu}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</SheetContent>
					</Sheet>
				</nav>
			</motion.div>
		</AnimatePresence>
	);
}
