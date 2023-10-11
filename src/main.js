'use strict';
import { InitSwapWidget } from '@dodoex/widgets';
import { CHAIN_ID_POLYGON, CHAIN_LIST_ALL, CHAIN_LIST_POLYGON, TOKEN_LIST_STARSEEDS_CURRENT, TOKEN_LIST_STARSEEDS_DISCONTINUED, TOKEN_LIST_DODO_POLYGON, TOKEN_LIST_DODO_MINUS_POLYGON } from './tokens.js';



const TOKEN_LISTS =
    {
    A: TOKEN_LIST_STARSEEDS_CURRENT.concat(TOKEN_LIST_STARSEEDS_DISCONTINUED, TOKEN_LIST_DODO_POLYGON),
    B: TOKEN_LIST_STARSEEDS_CURRENT.concat(TOKEN_LIST_DODO_POLYGON),
    C: TOKEN_LIST_STARSEEDS_CURRENT.concat(TOKEN_LIST_DODO_MINUS_POLYGON, TOKEN_LIST_DODO_POLYGON),
    };

const CHAIN_LISTS =
    {
    A: CHAIN_LIST_POLYGON,
    B: CHAIN_LIST_POLYGON,
    C: CHAIN_LIST_ALL,
    };

const CROSS_CHAIN_SETTINGS =
    {
    A: false,
    B: false,
    C: true,
    };



// const API_KEY = 'ef9apopzq9qrgntjubojbxe7hy4z5eez'; // This is a developer's test api key published on Dodo's website.
const WIDGET_NAME    = getWidgetName();
const API_KEY        = window.starseedsSwapWidget[WIDGET_NAME].API_KEY;
const FEE_RATE       = window.starseedsSwapWidget[WIDGET_NAME].FEE_RATE;
const REBATE_ADDRESS = window.starseedsSwapWidget[WIDGET_NAME].REBATE_ADDRESS;
const CHAIN_LIST     = CHAIN_LISTS[WIDGET_NAME];
const TOKEN_LIST     = TOKEN_LISTS[WIDGET_NAME];
const CROSS_CHAIN    = CROSS_CHAIN_SETTINGS[WIDGET_NAME];

function getWidgetName()
    {
    const pathname = window.location.pathname;
    const pos = pathname.length - 1;
    let widgetName = pathname.substring(pos, pos + 1);
    if (widgetName === "/") widgetName = pathname.substring(pos - 1, pos);
    return widgetName.toUpperCase();
    }

//alert(`WIDGET_NAME = ${ WIDGET_NAME }, REBATE_ADDRESS = ${ REBATE_ADDRESS }, FEE_RATE = ${ FEE_RATE }, API_KEY = ${ API_KEY }`);
if (FEE_RATE && REBATE_ADDRESS)
    {
    InitSwapWidget
        ({
        crossChain:     CROSS_CHAIN,
        defaultChainId: CHAIN_ID_POLYGON,
        jsonRpcUrlMap:  CHAIN_LIST,
        tokenList:      TOKEN_LIST,
        colorMode:      'dark',
        apikey:         API_KEY,
        feeRate:        FEE_RATE,
        rebateTo:       REBATE_ADDRESS,
        });
    }
else
    {
    InitSwapWidget
        ({
        crossChain:     CROSS_CHAIN,
        defaultChainId: CHAIN_ID_POLYGON,
        jsonRpcUrlMap:  CHAIN_LIST,
        tokenList:      TOKEN_LIST,
        colorMode:      'dark',
        apikey:         API_KEY,
        });
    }
