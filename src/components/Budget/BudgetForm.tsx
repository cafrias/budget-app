import React from "react";
import { useForm, FieldError } from "react-hook-form";

import { CreateBudgetDTO, Currency } from "../../lib/models/Budget";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";

function BudgetForm(): JSX.Element {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateBudgetDTO>();

	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log("Creating", data);
			})}
		>
			<Input
				id="budget_name"
				label="Name"
				{...register("name", { required: "Name cannot be empty" })}
				error={errors.name}
			/>
			<Select
				id="budget_currency"
				label="Currency"
				{...register("currency")}
				error={errors.currency}
			>
				{Object.values(Currency).map((currency) => (
					<option key={currency} value={currency}>
						{currency}
					</option>
				))}
			</Select>
			<Button type="submit">Create</Button>
		</form>
	);
}

export default BudgetForm;
