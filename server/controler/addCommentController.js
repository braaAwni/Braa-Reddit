const { addCommentQuery } = require("../database/query");

const addCommentController = (req, res, next) => {
  const { content } = req.body;
  const post_id = req.params.id;
  const user_id = req.userId;
  addCommentQuery(user_id, post_id, content)
    .then(() => res.json("done"))
    .catch((err) => {
      next(err);
    });
};

module.exports = addCommentController;
