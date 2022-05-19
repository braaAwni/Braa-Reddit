const { getpostQuery } = require("../database/query");

const getPostController = (req, res, next) => {
  getpostQuery()
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = getPostController;
