import React from "react";
import Budget from "../../lib/Budget/Budget";

interface ShowBudgetProps {
	data: Budget;
}

export default function BudgetShow({
	data,
}: ShowBudgetProps) {
	return (
		<ul>
			<li>Currency: {data.currency}</li>
		</ul>
	);
}
