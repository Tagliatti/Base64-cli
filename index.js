#! /usr/bin/env node

var arguments = process.argv.splice(2, process.argv.length -1);
var help = "Usage: base64 [option] [string]\n\n    -e or --encode\tFor encode a string.\n    -d or --decode\tFor decode a string.";
var argumentsList = ["-e", "--encode", "-d", "--decode", "--help"];

if (arguments[1] == undefined || arguments[0] == '--help' || argumentsList.indexOf(arguments[0]) == -1) {
    console.info(help);
    return;
}

if (arguments[0] == argumentsList[0] || arguments[0] == argumentsList[1]) {
    console.log( new Buffer( arguments[1] ).toString( 'base64' ) );
} else if (arguments[0] == argumentsList[2] || arguments[0] == argumentsList[3]) {
    console.log( new Buffer( arguments[1], 'base64' ).toString( 'utf8' ) );
}
