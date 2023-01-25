const errorHandler = (error, res) =>
  res.status(500).json({
    error: error.message,
  });

module.exports = {
  errorHandler,
};
