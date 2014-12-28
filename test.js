var jsdom = require("./lib/jsdom");
var staff = require('./test/level1/core/files/staff.xml');
var hc_staff = require('./test/level1/core/files/hc_staff.xml');

jsdom.env(
    '<html><head><style>p{color:red}</style></head><body>',
    function(err, win) {
        console.log(err, win.document.constructor.name, win.document.documentElement.outerHTML, win.document.head);
    }
);
