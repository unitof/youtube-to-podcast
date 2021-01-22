const Parser = require('rss-parser')
let parser = new Parser();

module.exports = async (req, res) => {
  const ytChannel = req.query.channel
  const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${ytChannel}`);

  res.json(feed)
}
