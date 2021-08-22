import { Account } from "../Account/Account";
import { Category, TO_BUDGET_CATEGORY } from "../Category/Category";
import { getAmount } from "../Transaction";

export enum Currency {
	USD = "USD",
	ARS = "ARS",
}

export interface CreateBudgetDTO {
	name: string;
	currency: Currency;
}

export default interface Budget {
	id: string;
	name: string;
	accounts: Account[];
	currency: Currency;
	categories: Category[];
}

// 
// Available Amounts
// 

/**
 * The transactions aggregated by category
 */
export type AggregatedTransactions = Record<string, Maybe<number>>;

/**
 * Aggregates the transactions by categories
 */
export function aggregateTransactions(
	budget: Budget
): AggregatedTransactions {
	const amounts: AggregatedTransactions = {};

	budget.accounts.forEach((acc) => {
		acc.transactions.forEach((tran) => {
			const catId = tran.category ?? TO_BUDGET_CATEGORY;
			amounts[catId] = (amounts[catId] ?? 0) + getAmount(tran);
		});
	});

	return amounts;
}
