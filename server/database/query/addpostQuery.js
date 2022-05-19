const connection = require("../config/connection");

const addpostQuery = (user_id, title, content) => {
  return connection.query({
    text: "INSERT INTO posts(user_id,title,content) VALUES ($1, $2, $3) returning *;",
    values: [user_id, title, content],
  });
};

module.exports = addpostQuery;
