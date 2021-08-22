export interface Transaction {
	/**
	 * The ID of the category this transaction belongs to.
	 */
	category?: string;

	/**
	 * If `true` this transaction is an _expense_, otherwise this is _income_.
	 */
	expense: boolean;

	/**
	 * The amount of the transaction.
	 */
	amount: number;
}

export function getAmount(tran: Transaction): number {
	return tran.expense ? -tran.amount : tran.amount;
}
