const fs      = require('fs');
const express = require('express');



const APP                   = express();
const PORT_NUMBER           = 3000;
const SOURCE_DIR            = 'dist';

const API_KEY               = process.env.DODOEX_WIDGET_API_KEY ? process.env.DODOEX_WIDGET_API_KEY : "";
const FEE_RATE              = process.env.DODOEX_WIDGET_FEE_RATE ? Number.parseInt(process.env.DODOEX_WIDGET_FEE_RATE) : 0;
const REBATE_ADDRESS        = process.env.DODOEX_WIDGET_REBATE_ADDRESS ? process.env.DODOEX_WIDGET_REBATE_ADDRESS : "";

const SETTINGS_FILE         = "dist/swapwidget/settings.js";
const SETTINGS_FILE_CONTENT = `window.starseedsSwapWidget = { API_KEY: "${ API_KEY }", FEE_RATE: ${ FEE_RATE }, REBATE_ADDRESS: "${ REBATE_ADDRESS }" };\n`;

try
    {
    fs.writeFileSync(SETTINGS_FILE, SETTINGS_FILE_CONTENT);
    }
catch (err)
    {
    console.error(err);
    }
APP.use(express.static(SOURCE_DIR));
APP.listen(PORT_NUMBER, () =>
    {
    console.log(`Express web server started   http://localhost:${ PORT_NUMBER }`);
    console.log(`Serving content from         /${ SOURCE_DIR }`);
    console.log(`DODOEX_WIDGET_API_KEY        ${ API_KEY }`);
    console.log(`DODOEX_WIDGET_FEE_RATE       ${ FEE_RATE }`);
    console.log(`DODOEX_WIDGET_REBATE_ADDRESS ${ REBATE_ADDRESS }`);
    });
