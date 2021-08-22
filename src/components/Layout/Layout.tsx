import React from "react";
import Skeleton from "../UI/Skeleton/Skeleton";
import Navbar from "./Navbar";

interface LayoutProps {
	title?: string;
	children?: React.ReactNode;
	loading?: boolean;
}

export default function Layout({ title, children, loading }: LayoutProps) {
	return (
		<div>
			<Navbar loading={loading} />
			<main className="container mr-2 ml-2">
				<Layout.Title text={title} />
				{children}
			</main>
		</div>
	);
}

interface TitleProps {
	text?: string;
}
Layout.Title = function LayoutTitle({ text }: TitleProps) {
	if (!text) {
		return (
			<Skeleton>
				<Skeleton.Rectangle />
			</Skeleton>
		);
	}

	return <h1 className="text-lg">{text}</h1>;
};
