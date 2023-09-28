const express = require('express');



const API_KEY        = process.env.DODOEX_WIDGET_API_KEY ? process.env.DODOEX_WIDGET_API_KEY : "";
const FEE_RATE       = process.env.DODOEX_WIDGET_FEE_RATE ? Number.parseInt(process.env.DODOEX_WIDGET_FEE_RATE) : 0;
const REBATE_ADDRESS = process.env.DODOEX_WIDGET_REBATE_ADDRESS ? process.env.DODOEX_WIDGET_REBATE_ADDRESS : "";

const app = express();
const portNumber = 3000;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}`);
  console.log(`DODOEX_WIDGET_API_KEY        = ${ API_KEY }`);
  console.log(`DODOEX_WIDGET_FEE_RATE       = ${ FEE_RATE }`);
  console.log(`DODOEX_WIDGET_REBATE_ADDRESS = ${ REBATE_ADDRESS }`);
});
