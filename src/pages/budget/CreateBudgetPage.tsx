import React from "react";
import { useHistory } from "react-router-dom";
import BudgetForm from "../../components/Budget/BudgetForm";
import Layout from "../../components/Layout/Layout";

export default function CreateBudgetPage() {
	const history = useHistory();

	return (
		<Layout title="Create Budget">
			<BudgetForm onCreate={(b) => history.push(`/budget/${b.id}`)} />
		</Layout>
	);
}
