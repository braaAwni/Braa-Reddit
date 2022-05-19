const connection = require("../config/connection");

const postUserQuery = (username, email, password) => {
  return connection.query({
    text: "INSERT INTO users(username, email, password) VALUES ($1, $2, $3) returning *;",
    values: [username, email, password],
  });
};

module.exports = postUserQuery;
