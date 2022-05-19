const { getuserpostQuery } = require("../database/query");

const getUserPost = (req, res, next) => {
  const userID = req.userId;
  getuserpostQuery(userID)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};
module.exports = getUserPost;
