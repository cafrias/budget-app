import Budget, { Currency } from "../lib/Budget/Budget";

const budgets: Budget[] = [
	{
		accounts: [
			{
				id: "acc_1",
				name: "Cash",
				log: [],
			},
			{
				id: "acc_2",
				name: "HSBC",
				log: [],
			},
		],
		categories: [
			{
				id: "cat_1",
				amount: 100,
				name: "Home",
			},
			{
				id: "cat_2",
				amount: 50,
				name: "Groceries",
			},
		],
		currency: Currency.USD,
		id: "bud_1",
		name: "My USD Budget",
	},
	{
		accounts: [
			{
				id: "acc_2",
				name: "Cash",
				log: [],
			},
			{
				id: "acc_3",
				name: "HSBC",
				log: [],
			},
		],
		categories: [
			{
				id: "cat_3",
				amount: 100,
				name: "Home",
			},
			{
				id: "cat_4",
				amount: 50,
				name: "Groceries",
			},
		],
		currency: Currency.ARS,
		id: "bud_2",
		name: "My ARS Budget",
	},
];

export default budgets;
