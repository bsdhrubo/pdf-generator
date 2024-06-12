export const ddInvoice = {
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
			margin: [0, 10, 0, 10],
			fontSize: 15,
		},
		{
			// layout: {
			// 	defaultBorder: true,
			// 	hLineWidth: function (i, node) {
			// 		return 1;
			// 	},
			// 	vLineWidth: function (i, node) {
			// 		return 1;
			// 	},
			// 	hLineColor: function (i, node) {
			// 		if (i === 1 || i === 0) {
			// 			return "#bfdde8";
			// 		}
			// 		return "#eaeaea";
			// 	},
			// 	vLineColor: function (i, node) {
			// 		return "#eaeaea";
			// 	},
			// 	hLineStyle: function (i, node) {
			// 		// if (i === 0 || i === node.table.body.length) {
			// 		return null;
			// 		//}
			// 	},
			// 	// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
			// 	paddingLeft: function (i, node) {
			// 		return 10;
			// 	},
			// 	paddingRight: function (i, node) {
			// 		return 10;
			// 	},
			// 	paddingTop: function (i, node) {
			// 		return 2;
			// 	},
			// 	paddingBottom: function (i, node) {
			// 		return 2;
			// 	},
			// 	fillColor: function (rowIndex, node, columnIndex) {
			// 		return "#fff";
			// 	},
			// },
			table: {
				headerRows: 1,
				widths: ["*", 80],
				body: [
					[
						{
							text: "ITEM DESCRIPTION",
							fillColor: "#eaf2f5",
							border: [false, true, false, true],
							margin: [0, 5, 0, 5],
							textTransform: "uppercase",
						},
						{
							text: "ITEM TOTAL",
							border: [false, true, false, true],
							alignment: "right",
							fillColor: "#eaf2f5",
							margin: [0, 5, 0, 5],
							textTransform: "uppercase",
						},
					],
					[
						{
							text: "Item 1",
							border: [false, false, false, true],
							margin: [0, 5, 0, 5],
							alignment: "left",
						},
						{
							border: [false, false, false, true],
							text: "$999.99",
							fillColor: "#f5f5f5",
							alignment: "right",
							margin: [0, 5, 0, 5],
						},
					],
					[
						{
							text: "Item 2",
							border: [false, false, false, true],
							margin: [0, 5, 0, 5],
							alignment: "left",
						},
						{
							text: "$999.99",
							border: [false, false, false, true],
							fillColor: "#f5f5f5",
							alignment: "right",
							margin: [0, 5, 0, 5],
						},
					],
					[
						{
							text: "Item 2",
							border: [false, false, false, true],
							margin: [0, 5, 0, 5],
							alignment: "left",
						},
						{
							text: "$999.99",
							border: [false, false, false, true],
							fillColor: "#f5f5f5",
							alignment: "right",
							margin: [0, 5, 0, 5],
						},
					],
					[
						{
							text: "Item 2",
							border: [false, false, false, true],
							margin: [0, 5, 0, 5],
							alignment: "left",
						},
						{
							text: "$999.99",
							border: [false, false, false, true],
							fillColor: "#f5f5f5",
							alignment: "right",
							margin: [0, 5, 0, 5],
						},
					],
					[
						{
							text: "Item 2",
							border: [false, false, false, true],
							margin: [0, 5, 0, 5],
							alignment: "left",
						},
						{
							text: "$999.99",
							border: [false, false, false, true],
							fillColor: "#f5f5f5",
							alignment: "right",
							margin: [0, 5, 0, 5],
						},
					],
					[
						{
							text: "Item 2",
							border: [false, false, false, true],
							margin: [0, 5, 0, 5],
							alignment: "left",
						},
						{
							text: "$999.99",
							border: [false, false, false, true],
							fillColor: "#f5f5f5",
							alignment: "right",
							margin: [0, 5, 0, 5],
						},
					],
				],
			},
		},
		"\n",
		"\n\n",
		{
			layout: {
				defaultBorder: false,
				hLineWidth: function (i: any, node: any) {
					return 1;
				},
				vLineWidth: function (i: any, node: any) {
					return 1;
				},
				hLineColor: function (i: any, node: any) {
					return "#eaeaea";
				},
				vLineColor: function (i: any, node: any) {
					return "#eaeaea";
				},
				hLineStyle: function (i: any, node: any) {
					// if (i === 0 || i === node.table.body.length) {
					return null;
					//}
				},
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				paddingLeft: function (i: any, node: any) {
					return 10;
				},
				paddingRight: function (i: any, node: any) {
					return 10;
				},
				paddingTop: function (i: any, node: any) {
					return 3;
				},
				paddingBottom: function (i: any, node: any) {
					return 3;
				},
				fillColor: function (
					rowIndex: any,
					node: any,
					columnIndex: any
				) {
					return "#fff";
				},
			},
			table: {
				headerRows: 1,
				widths: ["*", "auto"],
				body: [
					[
						{
							text: "Payment Subtotal",
							border: [false, true, false, true],
							alignment: "right",
							margin: [0, 5, 0, 5],
						},
						{
							border: [false, true, false, true],
							text: "$999.99",
							alignment: "right",
							fillColor: "#f5f5f5",
							margin: [0, 5, 0, 5],
						},
					],
					[
						{
							text: "Payment Processing Fee",
							border: [false, false, false, true],
							alignment: "right",
							margin: [0, 5, 0, 5],
						},
						{
							text: "$999.99",
							border: [false, false, false, true],
							fillColor: "#f5f5f5",
							alignment: "right",
							margin: [0, 5, 0, 5],
						},
					],
					[
						{
							text: "Total Amount",
							bold: true,
							fontSize: 20,
							alignment: "right",
							border: [false, false, false, true],
							margin: [0, 5, 0, 5],
						},
						{
							text: "USD $999.99",
							bold: true,
							fontSize: 20,
							alignment: "right",
							border: [false, false, false, true],
							fillColor: "#f5f5f5",
							margin: [0, 5, 0, 5],
						},
					],
				],
			},
		},
		"\n\n",
		{
			text: "NOTES",
			style: "notesTitle",
		},
		{
			text: "Some notes goes here \n Notes second line",
			style: "notesText",
		},
	],
	styles: {
		notesTitle: {
			fontSize: 10,
			bold: true,
			margin: [0, 50, 0, 3],
		},
		notesText: {
			fontSize: 10,
		},
	},
	defaultStyle: {
		columnGap: 20,
		//font: 'Quicksand',
	},
};
