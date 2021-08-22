import React from "react";
import Budget, { AggregatedTransactions } from "../../lib/Budget/Budget";
import CategoryList from "../Category/CategoryList";

interface ShowBudgetProps {
	budget: Budget;
	aggregatedTransactions: AggregatedTransactions;
}

export default function BudgetShow({
	budget,
	aggregatedTransactions
}: ShowBudgetProps) {
	return (
		<div>
			<p>Currency: {budget.currency}</p>

			<section>
				<h2>Categories</h2>
				<CategoryList
					data={budget.categories}
					aggregatedTransactions={aggregatedTransactions}
				/>
			</section>
		</div>
	);
}
