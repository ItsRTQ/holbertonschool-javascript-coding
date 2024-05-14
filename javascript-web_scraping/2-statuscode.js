#!/usr/bin/node
const request = require('request');
const targetURL = process.argv[2];

request.get(targetURL).on('response', function (response) {
  console.log(`code: ${response.statusCode}`);
});
