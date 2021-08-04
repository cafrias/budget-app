import React from "react";
import { useHistory, useParams } from "react-router-dom";
import BudgetForm from "../../components/Budget/BudgetForm";
import Layout from "../../components/Layout/Layout";

interface ShowBudgetPageParams {
	budgetId: string;
}

export default function ShowBudgetPage() {
	const { budgetId } = useParams<ShowBudgetPageParams>();

	return (
		<Layout title={`Budget ${budgetId}`}>
			{/* <BudgetForm onCreate={(b) => history.push(`/budget/${b.id}`)} /> */}
		</Layout>
	);
}
