import React from "react";

import { Link } from "react-router-dom";
import Budget from "../../lib/Budget/Budget";
import Skeleton from "../UI/Skeleton/Skeleton";

interface BudgetListProps {
	children?: React.ReactNode;
}

export default function BudgetList({ children }: BudgetListProps): JSX.Element {
	return <ul className="flex flex-col">{children}</ul>;
}

//
// Empty
//
BudgetList.Empty = function BudgetListEmpty() {
	return (
		<p>
			You don't have any budget yet,{" "}
			<Link to="/budget/new">create one</Link>
		</p>
	);
};

//
// Item
//
interface ItemProps {
	data?: Budget;
}
BudgetList.Item = function BudgetListItem({ data }: ItemProps) {
	const content = data ? (
		<Link to={`/budget/${data.id}`}>{data.name}</Link>
	) : (
		<Skeleton>
			<Skeleton.Rectangle />
		</Skeleton>
	);

	return <li className="my-1">{content}</li>;
};
