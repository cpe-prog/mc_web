import React from "react";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
	return (
		<div
			className={`container px-8 max-w-[1280px] py-6 xs:px-4 sm:px-4 md:px-8 mx-auto ${
				props.className ? props.className : ""
			}`}
		>
			{props.children}
		</div>
	);
}
