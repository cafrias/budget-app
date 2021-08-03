import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
	return (
		<button
			className="bg-gray-400 text-white text-base font-semibold py-2 px-4 hover:bg-gray-500"
			{...props}
		/>
	);
}
