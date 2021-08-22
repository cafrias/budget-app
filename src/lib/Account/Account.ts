import { Transaction } from "../Transaction";

export interface Account {
	id: string;
	name: string;
	transactions: Transaction[];
}
