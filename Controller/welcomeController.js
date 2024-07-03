const text = require("../utils/StatusTexts");

// Get
const welcome = (req, res) => {
  try {
    res.status(200).json({
      status: text.SUCCESS,
      data: "Allah Akbar",
    });
  } catch (err) {
    res.status(400).json({
      status: text.ERROR,
      message: text.MESSAGE,
    });
  }
};

module.exports = {
  welcome,
};
