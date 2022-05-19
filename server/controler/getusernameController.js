const { getUserByname } = require("../database/query");

const getusernameController = (req, res, next) => {
  const userID = req.userId;
  getUserByname(userID)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = getusernameController;
