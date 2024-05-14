#!/usr/bin/node
const filePath = process.argv[2];
const toAddText = process.argv[3];
const fs = require('fs');
fs.writeFile(filePath, toAddText, 'utf8', function (err, text) {
  if (err) {
    console.log(err);
  }
});
