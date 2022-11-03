const test = async (req, res) => {
  res.json({
    success: true,
    message: 'ok',
  });
};

module.exports = {
  test,
};
