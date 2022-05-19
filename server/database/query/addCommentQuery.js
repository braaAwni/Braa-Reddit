const connection = require("../config/connection");

const addCommentQuery = (user_id, post_id, content) => {
  const sql = {
    text: "INSERT INTO comments (user_id,post_id,content) VALUES ($1, $2, $3) RETURNING * ;",
    values: [user_id, post_id, content],
  };
  return connection.query(sql);
};

module.exports = addCommentQuery;
