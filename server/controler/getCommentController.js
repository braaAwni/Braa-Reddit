const { getPostCommentsQuery } = require("../database/query");

const getCommentController = (req, res, next) => {
  const postId = req.params.id;
  getPostCommentsQuery(postId)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};
module.exports = getCommentController;
