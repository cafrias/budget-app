import { useQuery } from "react-query";
import budgets from "../../data/budgets";

export function useBudgets() {
	return useQuery("budgets", () => {
		console.log("Fetching budgets");
		return Promise.resolve(budgets);
	});
}
