import { Link } from "react-router-dom";
import { AggregatedTransactions } from "../../lib/Budget/Budget";
import { Category } from "../../lib/Category/Category";

interface CategoryListProps {
	data: Category[];
	aggregatedTransactions: AggregatedTransactions;
}

export default function CategoryList({
	data,
	aggregatedTransactions,
}: CategoryListProps) {
	if (data.length === 0) {
		return <p>No categories</p>;
	}

	return (
		<table className="w-full">
			<tr className="text-left">
				<th>Name</th>
				<th>Budget</th>
				<th>Available</th>
				<th></th>
			</tr>
			{data.map((cat) => {
				return (
					<tr>
						<td>{cat.name}</td>
						<td>{cat.amount}</td>
						<td>{cat.amount - (aggregatedTransactions[cat.id] || 0)}</td>
						<td>
							<Link
								className="border block p-1 pl-2 pr-2"
								to={`/budget/transaction/new`}
							>New</Link>
						</td>
					</tr>
				);
			})}
		</table>
	);
}
