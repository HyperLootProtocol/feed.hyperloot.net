const express = require('express');
const https = require('https');

const app = express();

app.get('*', function(req, res) {
  const url = `https://www.reddit.com${req.path}`;

  https.get(url, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      res.send(data);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
    res.error(err);
  });
});

module.exports = {
  path: '/api/proxy',
  handler: app
}
