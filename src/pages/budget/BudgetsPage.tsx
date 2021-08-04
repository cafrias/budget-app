import React from 'react';
import { Link } from 'react-router-dom';
import BudgetList from '../../components/Budget/BudgetList';
import Layout from '../../components/Layout/Layout';
import { useBudgets } from '../../lib/Budget/useBudgets';

export default function BudgetsPage() {
	const { isFetching, data, error } = useBudgets();

	return (
		<Layout loading={isFetching} error={error || undefined} title="Budgets">
			<BudgetList data={data} />
			<Link to="/budget/new">Create new budget</Link>
		</Layout>
	)
}
