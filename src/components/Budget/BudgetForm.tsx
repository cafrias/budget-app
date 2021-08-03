import React from "react";
import classnames from 'classnames'

type ControlLayoutProps = {
	children?: React.ReactNode;
};

const ControlLayout: React.FC<ControlLayoutProps> = ({ children }) => {
	return <div className="flex flex-col">{children}</div>;
};

type InputType = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	id: string;
};

const Input: React.FC<InputType> = ({ label, id, ...inputAttributes }) => {
	return (
		<ControlLayout>
			<>
				<label htmlFor={id}>Name</label>
				<input
					{...inputAttributes}
					className={classnames("border-2", inputAttributes.className)}
					id={id}
				/>
			</>
		</ControlLayout>
	)
};

const BudgetForm: React.FC = () => {
	return (
		<form>
			<div className="flex flex-col">
				<Input
					id="budget_name"
					label="Name"
				/>
			</div>
		</form>
	);
};

export default BudgetForm;
