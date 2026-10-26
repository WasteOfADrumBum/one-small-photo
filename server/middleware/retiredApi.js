// This application is preserved as a retired reference; its old data API is disabled.
module.exports = function retiredApi(_req, res) {
  return res.status(410).json({ error: 'This legacy API has been retired.' });
};
