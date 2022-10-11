const SpotifyWebApi = require("spotify-web-api-node");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    });

    spotifyApi
      .refreshAccessToken()
      .then((data) => {
        res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
