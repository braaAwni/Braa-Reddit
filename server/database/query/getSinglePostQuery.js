const connection = require("../config/connection");
const getSinglePostQuery = (postId) => {
  const sql = {
    text: "SELECT posts.id,posts.title, posts.content,users.userName FROM posts JOIN users ON (posts.user_id = users.id) where posts.id = $1;",
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getSinglePostQuery;
