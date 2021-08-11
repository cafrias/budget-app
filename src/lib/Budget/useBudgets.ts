import { useQuery } from "react-query";
import budgets from "../../data/budgets";
import Budget from "./Budget";

export default function useBudgets() {
	return useQuery<Budget[], Error>("budgets", () => {
		console.log("Fetching budgets");
		return new Promise<Budget[]>((res) => {
			setTimeout(() => {
				res(budgets)
			}, 1_000);
		})
	});
}
