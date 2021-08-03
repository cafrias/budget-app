enum Currency {
	USD = "USD",
	ARS = "ARS",
}

interface Account {
	id: string;
	name: string;
	log: [];
}

interface Category {
	id: string;
	name: string;
	amount: number;
}

export default interface Budget {
	id: string;
	name: string;
	accounts: Account[];
	currency: Currency;
	categories: Category[];
}
