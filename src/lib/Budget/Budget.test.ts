import { TO_BUDGET_CATEGORY } from "../Category/Category"
import Budget, { aggregateTransactions } from "./Budget"

describe('Budget', () => {
	describe(aggregateTransactions.name, () => {
		const budget: Partial<Budget> = {
			accounts: [
				{
					id: 'acc_1',
					name: 'acc_1',
					transactions: [
						{
							amount: 40,
							expense: false,
						},
						{
							amount: 200,
							expense: true,
							category: 'cat_1',
						},
						{
							amount: 10,
							expense: true,
							category: 'cat_2'
						}
					]
				},
				{
					id: 'acc_2',
					name: 'acc_2',
					transactions: [
						{
							amount: 40,
							expense: true
						},
						{
							amount: 50,
							expense: false,
							category: 'cat_2'
						}
					]
				}
			]
		}

		it('Returns correctly', () => {
			const amounts = aggregateTransactions(budget as Budget);
			expect(amounts).toEqual({
				[TO_BUDGET_CATEGORY]: 0,
				cat_1: -200,
				cat_2: 40,
			})
		})
	})
})
