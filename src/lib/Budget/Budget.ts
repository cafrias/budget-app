import { Account } from "../Account/Account";

export enum Currency {
	USD = "USD",
	ARS = "ARS",
}

interface Category {
	id: string;
	name: string;
	amount: number;
}

export interface CreateBudgetDTO {
	name: string;
	currency: Currency;
}

export default interface Budget {
	id: string;
	name: string;
	accounts: Account[];
	currency: Currency;
	categories: Category[];
}
