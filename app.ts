import * as fs from "fs";
import * as PdfPrinter from "pdfmake";
import { ddData } from "./src/table";

var fonts = {
	Roboto: {
		normal: "fonts/SolaimanLipi.ttf",
		bold: "fonts/SolaimanLipi.ttf",
		italics: "fonts/SolaimanLipi.ttf",
		bolditalics: "fonts/SolaimanLipi.ttf",
	},
};

// var fonts = {
// 	Roboto: {
// 		normal: "fonts/kalpurush.ttf",
// 		bold: "fonts/kalpurush.ttf",
// 		italics: "fonts/kalpurush.ttf",
// 		bolditalics: "fonts/kalpurush.ttf",
// 	},
// };

// Create a PdfPrinter instance
const printer = new PdfPrinter(fonts);

// Generate the PDF
const pdfDoc = printer.createPdfKitDocument(ddData);

// Pipe the PDF to a writable stream
const stream = pdfDoc.pipe(fs.createWriteStream("output.pdf"));

// Once the PDF is generated, save it to the file system
pdfDoc.end();
stream.on("finish", () => {
	console.log("PDF generated and saved successfully.");
});
