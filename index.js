#! /usr/bin/env node

var fs = require('fs');

var filepath = process.argv[2];

if (!filepath) {
    console.warn('usage: jsonbeautify <file>');
    process.exit();
}

if (!fs.existsSync(filepath)) {
    console.warn('Can not find file: ' + filepath);
    process.exit();
}

var content = fs.readFileSync(filepath);
try {
    var json = JSON.parse(content);
}
catch (ex) {
    console.warn('invalid json');
    process.exit();
}

console.log(JSON.stringify(json, null, 4));
