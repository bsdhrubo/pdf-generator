export interface IDepositSummaryItem {
	PaymentFrom: string;
	InvoiceNumber: string;
	Reference: string;
	AmountPaid: string;
}
export interface IDepositSummaryTopInfo {
	title: string;
	ref: string;
	accountName: string;
	bankAccountNumber: string;
	date: string;
	totalItems: string;
	totalAmount: string;
}
export interface IDepositSummary extends IDepositSummaryTopInfo {
	items: IDepositSummaryItem[];
}
