import React from "react";
import Skeleton from "../UI/Skeleton/Skeleton";
import Navbar from "./Navbar";

interface LayoutProps {
	title?: string;
	children?: React.ReactNode;
	error?: Error;
	loading?: boolean;
}

export default function Layout({
	title,
	children,
	error,
	loading,
}: LayoutProps) {
	if (error) {
		return <Layout.Container>{error.message}</Layout.Container>;
	}

	return (
		<Layout.Container loading={loading}>
			<Layout.Title text={title} />
			{children}
		</Layout.Container>
	);
}

interface ContainerProps {
	children?: React.ReactNode;
	loading?: boolean;
}
Layout.Container = function LayoutContainer({
	children,
	loading,
}: ContainerProps) {
	return (
		<div>
			<Navbar loading={loading} />
			<main className="container w-3/6 mx-auto">{children}</main>
		</div>
	);
};

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
