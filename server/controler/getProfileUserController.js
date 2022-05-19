const { getuserpostQuery, getUserByname } = require("../database/query");

const getProfileUserController = (req, res, next) => {
  const userID = req.params.id;
  Promise.all([getuserpostQuery(userID), getUserByname(userID)])
    .then((value) => res.json([value[0].rows, value[1].rows]))
    .catch((err) => next(err));
};

module.exports = getProfileUserController;
