#!/usr/bin/node
const request = require('request');
const targetUrl = process.argv[2];

request(targetUrl, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  const data = JSON.parse(body);
  const userDict = {};
  for (let i = 0; i < data.length; i++) {
    const temp = String(data[i].userId);
    userDict[temp] = 0;
  }
  for (let i = 0; i < data.length; i++) {
    const temp = String(data[i].userId);
    if (data[i].completed === true) {
      userDict[temp] += 1;
    }
  }
  for (const key in userDict) {
    if (userDict[key] === 0) {
      delete userDict[key];
    }
  }
  console.log(userDict);
});
