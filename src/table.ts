import * as fs from "fs";

const jsonData = fs.readFileSync("./example/pdf_payload.json", "utf8");

// console.log(Object.keys(JSON.parse(jsonData)));

export const tableData = JSON.parse(jsonData);

// console.log(tableData);

function buildTableBody(data, columns) {
	var body = [];

	body.push(columns);

	data.forEach(function (row) {
		var dataRow = [];

		columns.forEach(function (column) {
			const obj = {
				text: row[column],
				border: [false, true, false, true],
				margin: [0, 3, 0, 3],
				alignment: column === "AmountPaid" ? "right" : "left",
				fontSize: 12,
			};
			dataRow.push(obj);
		});
		body.push(dataRow);
	});

	return body;
}

function table(data, columns) {
	return {
		layout: {
			defaultBorder: false,
			hLineWidth: function (i, node) {
				return 1;
			},
			vLineWidth: function (i, node) {
				return 1;
			},
			hLineColor: function (i, node) {
				if (i === 1 || i === 0) {
					return "#bfdde8";
				}
				return "#eaeaea";
			},
			vLineColor: function (i, node) {
				return "#eaeaea";
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
				return 2;
			},
			paddingBottom: function (i, node) {
				return 2;
			},
			fillColor: function (rowIndex, node, columnIndex) {
				return "#fff";
			},
		},
		table: {
			headerRows: 1,
			widths: [200, 100, 80, 80],
			body: buildTableBody(data, columns),
		},
	};
}

export const ddData = {
	pageSize: "A4",
	pageMargins: [25, 25, 25, 25],
	content: [
		{
			columns: [
				{
					image: "./qr.png",
					width: 150,
				},
				[
					{
						text: "TS Demo",
						color: "#333333",
						width: "*",
						fontSize: 28,
						bold: true,
						alignment: "right",
						margin: [0, 0, 0, 15],
					},
					{
						stack: [
							{
								columns: [
									{
										text: "Receipt No.",
										color: "#aaaaab",
										bold: true,
										width: "*",
										fontSize: 12,
										alignment: "right",
									},
									{
										text: "00001",
										bold: true,
										color: "#333333",
										fontSize: 12,
										alignment: "right",
										width: 100,
									},
								],
							},
							{
								columns: [
									{
										text: "Date Issued",
										color: "#aaaaab",
										bold: true,
										width: "*",
										fontSize: 12,
										alignment: "right",
									},
									{
										text: "June 01, 2016",
										bold: true,
										color: "#333333",
										fontSize: 12,
										alignment: "right",
										width: 100,
									},
								],
							},
							{
								columns: [
									{
										text: "Status",
										color: "#aaaaab",
										bold: true,
										fontSize: 12,
										alignment: "right",
										width: "*",
									},
									{
										text: "PAID",
										bold: true,
										fontSize: 14,
										alignment: "right",
										color: "green",
										width: 100,
									},
								],
							},
						],
					},
				],
			],
		},
		{
			columns: [
				{
					text: "From",
					color: "#aaaaab",
					bold: true,
					fontSize: 14,
					alignment: "left",
					margin: [0, 20, 0, 5],
				},
				{
					text: "To",
					color: "#aaaaab",
					bold: true,
					fontSize: 14,
					alignment: "right",
					margin: [0, 20, 0, 5],
				},
			],
		},
		{
			columns: [
				{
					text: "Your Name \n Your Company Inc.",
					bold: true,
					color: "#333333",
					alignment: "left",
				},
				{
					text: "Client Name \n Client Company",
					bold: true,
					color: "#333333",
					alignment: "right",
				},
			],
		},
		{
			columns: [
				{
					text: "Address",
					color: "#aaaaab",
					bold: true,
					alignment: "left",
					margin: [0, 7, 0, 3],
				},
				{
					text: "Address",
					color: "#aaaaab",
					bold: true,
					alignment: "right",
					margin: [0, 7, 0, 3],
				},
			],
		},
		{
			columns: [
				{
					text: "9999 Street name 1A \n New-York City NY 00000 \n   USA",
					style: "invoiceBillingAddress",
					alignment: "left",
				},
				{
					text: "1111 Other street 25 \n New-York City NY 00000 \n   USA",
					style: "invoiceBillingAddress",
					alignment: "right",
				},
			],
		},
		"\n\n",
		{
			width: "100%",
			alignment: "center",
			text: "Invoice No. 123",
			bold: true,
			margin: [0, 5, 0, 10],
			fontSize: 13,
		},
		table(tableData.slice(1, 20), Object.keys(tableData[0])),
	],
};
