import { useQuery } from "react-query";
import budgets from "../../data/budgets";
import NotFoundError from "../../errors/NotFoundError";
import Budget from "./Budget";

export default function useBudget(id: string) {
	return useQuery<Budget, Error>(['budget', id], () => {
		return new Promise<Budget>((res, rej) => {
			setTimeout(() => {
				const budget = budgets.find((bud) => bud.id === id);
				if (!budget) {
					return rej(new NotFoundError(`Budget with id ${id}`))
				}

				res(budget)
			}, 1_000);
		})
	});	
}