import * as fs from "fs";
import {
	IDepositSummary,
	IDepositSummaryItem,
	IDepositSummaryTopInfo,
} from "./interfaces/depositSummary";

const jsonData = fs.readFileSync("./example/pdf_payload.json", "utf8");

// console.log(Object.keys(JSON.parse(jsonData)));
const defaultFontSize = 12;
export const pdfData: IDepositSummary = JSON.parse(jsonData) as IDepositSummary;
const { items, ...topInfo } = pdfData;
export const tableData = pdfData.items;

function buildTopInformation(topInfo: IDepositSummaryTopInfo) {
	return {
		columns: [
			[
				{
					text: "Deposite Summary",
					width: "*",
					fontSize: 20,
					bold: true,
					alignment: "left",
					margin: [0, 0, 40, 0],
				},
				{
					text: "Chamak Solutions Limited",
					width: "*",
					fontSize: defaultFontSize,
					bold: true,
					alignment: "left",
					margin: [0, 0, 0, 0],
				},
				{
					text: "Account Name",
					bold: true,
					width: "*",
					fontSize: defaultFontSize,
					alignment: "left",
					margin: [350, 0, 50, 0],
				},
				{
					text: topInfo.accountName,
					bold: false,
					fontSize: defaultFontSize,
					alignment: "left",
					margin: [350, 0, 0, 0],
				},
				{
					text: "Bank Account No.",
					bold: true,
					width: "*",
					fontSize: defaultFontSize,
					alignment: "left",
					margin: [350, 5, 0, 0],
				},
				{
					text: topInfo.bankAccountNumber,
					bold: false,
					fontSize: defaultFontSize,
					alignment: "left",
					margin: [350, 0, 0, 0],
				},
				{
					text: "Payment Date",
					bold: true,
					fontSize: defaultFontSize,
					alignment: "left",
					margin: [350, 5, 0, 0],
				},
				{
					text: topInfo.date,
					fontSize: defaultFontSize,
					bold: false,
					alignment: "left",
					margin: [350, 0, 0, 0],
				},
			],
		],
	};
}

function buildTableBody(data: IDepositSummaryItem[], headers: string[]) {
	const body = [];
	const tHeaders = [];
	headers.forEach(function (title: string) {
		const obj = {
			text: title,
			border: [false, true, false, true],
			margin: [0, 3, 0, 3],
			alignment: title === "AmountPaid" ? "right" : "left",
			fontSize: defaultFontSize,
		};
		tHeaders.push(obj);
	});

	body.push(tHeaders);

	data.forEach(function (rowObj) {
		const dataRow = [];
		headers.forEach(function (title) {
			const obj = {
				text: rowObj[title],
				border: [false, true, false, true],
				margin: [0, 3, 0, 3],
				alignment: title === "AmountPaid" ? "right" : "left",
				fontSize: defaultFontSize,
			};
			dataRow.push(obj);
		});
		body.push(dataRow);
	});

	return body;
}

function buildtable(data: IDepositSummaryItem[], columns: string[]) {
	return {
		layout: {
			defaultBorder: false,
			// hLineWidth: function (i, node) {
			// 	return 1;
			// },
			// vLineWidth: function (i, node) {
			// 	return 1;
			// },
			hLineColor: function (i, node) {
				if (i === 1 || i === 0) {
					return "#0000";
				}
				return "#eaeaea";
			},
			vLineColor: function (i, node) {
				return "#eaeaea";
			},
			// hLineStyle: function (i, node) {
			// 	// if (i === 0 || i === node.table.body.length) {
			// 	return null;
			// 	//}
			// },
			// // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
			// paddingLeft: function (i, node) {
			// 	return 10;
			// },
			// paddingRight: function (i, node) {
			// 	return 10;
			// },
			// paddingTop: function (i, node) {
			// 	return 2;
			// },
			// paddingBottom: function (i, node) {
			// 	return 2;
			// },
			// fillColor: function (rowIndex, node, columnIndex) {
			// 	return "#fff";
			// },
		},
		table: {
			headerRows: 1,
			widths: [200, 100, 80, 120],
			body: buildTableBody(data, columns),
		},
	};
}

export const ddData = {
	pageSize: "A4",
	pageMargins: [25, 25, 25, 25],
	content: [
		buildTopInformation(topInfo),
		"\n\n\n",
		buildtable(tableData.slice(0, 20), Object.keys(tableData[0])),
		"\n",
		{
			layout: {
				defaultBorder: false,
				// hLineWidth: function (i, node) {
				// 	return 1;
				// },
				// vLineWidth: function (i, node) {
				// 	return 1;
				// },
				hLineColor: function (i, node) {
					return "#0000";
				},
				vLineColor: function (i, node) {
					return "#0000";
				},
				hLineStyle: function (i, node) {
					// if (i === 0 || i === node.table.body.length) {
					return null;
					//}
				},
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				paddingLeft: function (i, node) {
					return 10;
				},
				paddingRight: function (i, node) {
					return 10;
				},
				paddingTop: function (i, node) {
					return 3;
				},
				paddingBottom: function (i, node) {
					return 3;
				},
				fillColor: function (rowIndex, node, columnIndex) {
					return "#fff";
				},
			},
			table: {
				// headerRows: 1,
				widths: ["*", "auto"],
				body: [
					[
						{
							text: pdfData.totalItems,
							bold: true,
							fontSize: defaultFontSize,
							alignment: "right",
							border: [false, false, false, true],
							margin: [0, 5, 0, 5],
						},
						{
							text: pdfData.totalAmount,
							bold: true,
							fontSize: defaultFontSize,
							alignment: "right",
							border: [false, false, false, true],
							margin: [0, 5, 0, 5],
						},
					],
				],
			},
		},
		"\n\n",
	],
};
