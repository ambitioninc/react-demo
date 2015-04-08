import {jsdom} from 'jsdom';


let window = jsdom(
    `<!doctype html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title></title>
        </head>
        <body>
        </body>
    </html>`
).parentWindow;

global.window = window;
global.document = global.window.document;
global.navigator = global.window.navigator;
