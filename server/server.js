const express = require("express");
const SpotifyApi = require("spotify-web-api-node");

const app = express();

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "889c3623b35c4fdb89d884dfbca8afba",
    clientSecret: "dbcd782fc94941de869f5294d9f6ff77",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refresh_token: data.body.refresh_token,
        expires_in: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});
