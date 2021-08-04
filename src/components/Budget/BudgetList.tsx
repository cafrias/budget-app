import React from "react";

import { Link } from "react-router-dom";
import Budget from "../../lib/Budget/Budget";
import Skeleton from "../UI/Skeleton/Skeleton";

interface BudgetListProps {
	data?: Budget[];
}

export default function BudgetList({ data }: BudgetListProps): JSX.Element {
	if (!data) {
		return (
			<BudgetList.Container>
				<BudgetList.SkeletonItem />
				<BudgetList.SkeletonItem />
				<BudgetList.SkeletonItem />
			</BudgetList.Container>
		);
	}

	if (data.length === 0) {
		return (
			<BudgetList.Container>
				<p>
					You don't have any budget yet,{" "}
					<Link to="/budget/new">create one</Link>
				</p>
			</BudgetList.Container>
		);
	}

	return (
		<BudgetList.Container>
			{data.map((item) => {
				return <BudgetList.Item key={item.id} data={item} />;
			})}
		</BudgetList.Container>
	);
}

interface ContainerProps {
	children: React.ReactNode;
}
BudgetList.Container = function BudgetListContainer({ children }: ContainerProps) {
	return <ul className="flex flex-col">{children}</ul>;
};

interface ItemProps {
	data: Budget;
}
BudgetList.Item = function BudgetListItem({ data }: ItemProps) {
	return (
		<li className="my-1">
			<Link to={`/budget/${data.id}`}>{data.name}</Link>
		</li>
	);
};

BudgetList.SkeletonItem = function BudgetListSkeletonItem() {
	return (
		<li className="my-1">
			<Skeleton>
				<Skeleton.Rectangle/>
			</Skeleton>
		</li>
	);
};
