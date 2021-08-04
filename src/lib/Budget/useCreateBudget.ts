import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import budgets from "../../data/budgets";
import Budget, { CreateBudgetDTO } from "./Budget";

interface CreateBudgetInput {
	onSuccess?: (newBudget: Budget) => void
}

export default function useCreateBudget({ onSuccess }: CreateBudgetInput = {}) {
	return useMutation(
		(data: CreateBudgetDTO) => {
			console.log("Creating budget ...");
			const newBudget: Budget = {
				accounts: [],
				categories: [],
				id: uuidv4(),
				...data,
			};
			budgets.push(newBudget);
			return Promise.resolve(newBudget);
		},
		{
			onSuccess(data) {
				if (onSuccess) {
					onSuccess(data)
				}
			},
		}
	);
}
