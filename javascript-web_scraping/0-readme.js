#!/usr/bin/node
const filePath = process.argv[2];
const fs = require('fs');
fs.readFile(filePath, 'utf8', function (err, text) {
  if (err) {
    console.log(err);
  } else {
    console.log(text);
  }
});
