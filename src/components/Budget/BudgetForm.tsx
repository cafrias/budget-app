import React from "react";
import { useForm } from "react-hook-form";

import Budget, { CreateBudgetDTO, Currency } from "../../lib/Budget/Budget";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import useCreateBudget from "../../lib/Budget/useCreateBudget";

interface BudgetFormProps {
	onCreate?: (b: Budget) => void
} 

function BudgetForm({
	onCreate
}: BudgetFormProps): JSX.Element {
	const { mutate } = useCreateBudget({ onSuccess: onCreate });
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateBudgetDTO>();

	return (
		<form
			onSubmit={handleSubmit((data) => {
				mutate(data);
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
