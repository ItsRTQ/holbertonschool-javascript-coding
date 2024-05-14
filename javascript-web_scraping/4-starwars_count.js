#!/usr/bin/node
const request = require('request');
const useURL = process.argv[2];
const characterId = 'https://swapi-api.hbtn.io/api/people/18/';

request(useURL, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  const data = JSON.parse(body);
  const moviesInfo = data.results;
  let foundAmount = 0;
  for (let i = 0; i < moviesInfo.length; i++) {
    if (moviesInfo[i].characters.includes(characterId)) {
      foundAmount++;
    }
  }
  console.log(foundAmount);
});
