import React from "react";
import { FieldError } from "react-hook-form";
import ControlLayout from "../ControlLayout/ControlLayout";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
	error?: FieldError;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, id, error, ...inputAttributes }, ref): JSX.Element => {
		return (
			<ControlLayout label={label} id={id} error={error}>
				<input ref={ref} {...inputAttributes} id={id} />
			</ControlLayout>
		);
	}
);

export default Input;
