import React from "react";
import { FieldError } from "react-hook-form";
import ControlLayout from "../ControlLayout/ControlLayout";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	id: string;
	label: string;
	children: React.ReactNode;
	error?: FieldError;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	({ label, id, children, error, ...selectProps }, ref): JSX.Element => {
		return (
			<ControlLayout label={label} id={id} error={error}>
				<select ref={ref} {...selectProps} id={id}>
					{children}
				</select>
			</ControlLayout>
		);
	}
);

export default Select;
