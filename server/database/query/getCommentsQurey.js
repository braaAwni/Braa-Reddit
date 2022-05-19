const connection = require("../config/connection");

const getPostCommentsQuery = (postId) =>
  connection.query({
    text: "SELECT comments.id,comments.post_id,comments.content,users.userName FROM comments JOIN users ON (comments.user_id = users.id) WHERE comments.post_id = $1",
    values: [postId],
  });

module.exports = getPostCommentsQuery;
