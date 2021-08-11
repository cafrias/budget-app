import React from "react";
import { Link } from "react-router-dom";
import BudgetList from "../../components/Budget/BudgetList";
import Layout from "../../components/Layout/Layout";
import useBudgets from "../../lib/Budget/useBudgets";

export default function BudgetsPage() {
	const { data, error, isLoading } = useBudgets();

	if (error) {
		throw error;
	}

	if (!data || isLoading) {
		return <BudgetsPage.Loading />;
	}

	return (
		<Layout title="Budgets">
			<BudgetList>
				{data.map((bud) => {
					return <BudgetList.Item data={bud} />;
				})}
			</BudgetList>
			<Link to="/budget/new">Create new budget</Link>
		</Layout>
	);
}

//
// Loading
//
BudgetsPage.Loading = function BudgetsPageLoading() {
	return (
		<Layout loading title="Budgets">
			<BudgetList>
				<BudgetList.Item />
				<BudgetList.Item />
				<BudgetList.Item />
			</BudgetList>
		</Layout>
	);
};
