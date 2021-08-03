import { FieldError } from "react-hook-form";

interface ControlLayoutProps {
	id: string;
	label: string;
	error?: FieldError;
	children?: React.ReactNode;
}

export default function ControlLayout({
	id,
	label,
	children,
	error,
}: ControlLayoutProps): JSX.Element {
	return (
		<div className="flex flex-col">
			<label htmlFor={id}>{label}</label>
			{children}
			{error ? <span>{error.message}</span> : null}
		</div>
	);
}
