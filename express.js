const express = require('express');



const HELLO_WORLD_HTML =
`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello World</title>
</head>
<body>

<h1>Hello World</h1>

</body>
</html>
`;

function helloWorld(req, res)
    {
    res.send(HELLO_WORLD_HTML);
    }



const SUFFIXES = [ "A", "B", "C" ];

let paramsJS = "";

function sendParamsJS(req, res)
    {
    res.send(generateParamsJS());
    }

function generateParamsJS()
    {
    if (!paramsJS) paramsJS = "window.starseedsSwapWidget = " + loadAllParams() + ";\n";
    return paramsJS;
    }

function loadAllParams()
    {
    let params = "{ ";
    for (let sfx of SUFFIXES) params += `${ sfx }: ${ load1ParamSet(sfx) }, `;
    return params + "}";
    }

function load1ParamSet(suffix)
    {
    let params = "{ ";
    const apiKey = process.env["WIDGET_API_KEY_" + suffix];
    params += `API_KEY: "${ apiKey ? apiKey : "" }", `;
    const rebateAddress = process.env["WIDGET_REBATE_ADDRESS_" + suffix];
    params += `REBATE_ADDRESS: "${ rebateAddress ? rebateAddress : "" }", `;
    const feeRate = process.env["WIDGET_FEE_RATE_" + suffix];
    params += `FEE_RATE: ${ feeRate ? Number.parseInt(feeRate) : 0 }, `;
    return params + "}";
    }



const APP         = express();
const PORT_NUMBER = 3000;

for (let sfx of SUFFIXES)
    {
    APP.use(`/swapwidget/${ sfx               }`, express.static('dist/swapwidget'));
    APP.use(`/swapwidget/${ sfx.toLowerCase() }`, express.static('dist/swapwidget'));
    }
APP.all('/params', sendParamsJS);
APP.all('/', helloWorld);
APP.all('/index.html', helloWorld);
APP.listen(PORT_NUMBER, () =>
    {
    console.log(`Starseeds web server started http://localhost:${ PORT_NUMBER }`);
    console.log(`${ generateParamsJS() }`);
    });
