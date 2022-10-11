const lyricsFinder = require("lyrics-finder");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const lyrics =
      (await lyricsFinder(req.query.artist, req.query.track)) ||
      "No Lyrics Found";
    res.json({ lyrics });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
