const { deletePostQuery } = require("../database/query");

const deletePostController = (req, res, next) => {
  const { id } = req.params;
  deletePostQuery(id)
    .then((data) => res.json("done"))
    .catch((err) => next(err));
};
module.exports = deletePostController;
