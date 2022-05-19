const { join } = require("path");
const clientError = (req, res) => {
  res
    .status(404)
    .sendFile(join(__dirname, "..", "..", "public", "html", "404.html"));
};

const serverError = (err, req, res, next) => {
  const internalServerError =
    '<p style="font-size: 10vh; text-align: center;">500!</p>';

  if (err.status) {
    res.status(err.status).json({ status: err.status, message: err.message });
  } else {
    res.status(500).json({ status: 500, message: "SERVER ERROR" });
  }
};

module.exports = { serverError, clientError };
