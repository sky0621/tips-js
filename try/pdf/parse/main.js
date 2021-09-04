// let fs = require('fs'),
//     PDFParser = require("pdf2json");
//
// let pdfParser = new PDFParser();
//
// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
// pdfParser.on("pdfParser_dataReady", pdfData => {
//     const dt = JSON.stringify(pdfParser.getAllFieldsTypes());
//     console.log(dt)
//     try {
//         fs.writeFile("./F1040EZ.json", dt);
//     } catch(e) {
//         console.log(e)
//     }
// });
//
// pdfParser.loadPDF("./test.pdf");

const fs = require('fs');
const pdf = require('pdf-parse');

const pdf_filename = 'test.pdf'

let dataBuffer = fs.readFileSync(pdf_filename);

pdf(dataBuffer).then(function (data) {

    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata);
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.version);
    // PDF text
    console.log(data.text);
});
