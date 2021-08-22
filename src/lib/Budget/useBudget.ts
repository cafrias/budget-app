import { useMemo } from "react";
import { useQuery } from "react-query";
import budgets from "../../data/budgets";
import NotFoundError from "../../errors/NotFoundError";
import Budget, { AggregatedTransactions, aggregateTransactions } from "./Budget";

// 
// Types
//

type UseBudget = {
	isLoading: boolean;
	error: Nullable<Error>;
	budget: Maybe<Budget>;
	aggregatedTransactions: Maybe<AggregatedTransactions>;
}

// 
// Hook
// 

/**
 * Retrieves a budget and cached data about it.
 */
export default function useBudget(id: string): UseBudget {
	const { data, error, isLoading } = useQuery<Budget, Error>(['budget', id], () => {
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

	const aggregatedTransactions = useMemo(() => {
		if (!data) {
			return undefined;
		}

		return aggregateTransactions(data)
	}, [data])

	return {
		budget: data,
		aggregatedTransactions,
		error,
		isLoading
	}
}