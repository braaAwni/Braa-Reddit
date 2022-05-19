const { addpostQuery } = require("../database/query");
const addPostSchema = require("../utils/validation/addPostValidation");
const customError = require("../utils/error/handelError");

const addpostController = (req, res, next) => {
  const { title, content } = req.body;
  const user_id = req.userId;
  addPostSchema
    .validateAsync(req.body)
    .then(() => addpostQuery(user_id, title, content))
    .then(() => res.json("add post"))
    .catch((err) => next(err));
};
module.exports = addpostController;
