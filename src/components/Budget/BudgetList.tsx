import React from "react";

import { useBudgets } from "../../lib/Budget/useBudgets";
import { Link } from "react-router-dom";

function BudgetList(): JSX.Element {
	const { isFetching, data, error } = useBudgets();

	if (error) {
		return <p>SOmething went wrong</p>;
	}

	if (isFetching || !data) {
		return <p>... is loading</p>;
	}

	return (
		<div>
			<ul>
				{data.map((bud) => (
					<li key={bud.id}>
						<Link to={`/budget/${bud.id}`}>{bud.name}</Link>
					</li>
				))}
			</ul>
			<Link to="/budget/new">Create new budget</Link>
		</div>
	);
}

export default BudgetList;
