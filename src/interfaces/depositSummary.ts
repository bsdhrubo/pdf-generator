export interface IDepositSummaryItem {
	PaymentFrom: string;
	InvoiceNumber: string;
	Reference: string;
	AmountPaid: string;
}

export interface IDepositSummary {
	title: string;
	ref: string;
	accountName: string;
	bankAccountNumber: string;
	date: string;
	totalItems: string;
	totalAmount: string;
	items: IDepositSummaryItem[];
}
