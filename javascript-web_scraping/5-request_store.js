#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const targetUrl = process.argv[2];
const filePath = process.argv[3];

request(targetUrl, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile(filePath, body, 'utf8', (err, text) => {
    if (err) {
      console.log(err);
    }
  });
});
