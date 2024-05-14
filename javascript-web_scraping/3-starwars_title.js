#!/usr/bin/node
const request = require('request');
const useURL = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request(useURL, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  const data = JSON.parse(body);
  console.log(data.title);
});
