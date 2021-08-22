import React from "react";
import { useHistory, useParams } from "react-router-dom";
import BudgetForm from "../../components/Budget/BudgetForm";
import BudgetShow from "../../components/Budget/BudgetShow";
import Layout from "../../components/Layout/Layout";
import useBudget from "../../lib/Budget/useBudget";

interface ShowBudgetPageParams {
	budgetId: string;
}

export default function ShowBudgetPage() {
	const { budgetId } = useParams<ShowBudgetPageParams>();

	const { budget, aggregatedTransactions, error, isLoading } = useBudget(budgetId);

	if (error) {
		throw error;
	}

	// FIXME: when checking for `isLoading` should already
	// have checked for budget and available amounts.
	if (!aggregatedTransactions || !budget || isLoading) {
		return <ShowBudgetPage.Loading />;
	}

	return (
		<Layout title={budget.name}>
			<BudgetShow budget={budget} aggregatedTransactions={aggregatedTransactions} />
		</Layout>
	);
}

//
// Loading
//
ShowBudgetPage.Loading = function ShowBudgetPageLoading() {
	return <Layout loading title="Loading budget ..." />;
};
