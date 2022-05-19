const { getSinglePostQuery } = require("../database/query");

const getSinglePostController = (req, res, next) => {
  const postId = req.params.id;
  getSinglePostQuery(postId)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};
module.exports = getSinglePostController;
