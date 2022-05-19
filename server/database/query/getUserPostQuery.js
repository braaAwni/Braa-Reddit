const connection = require("../config/connection");

const getuserpostQuery = (userID) => {
  return connection.query({
    text: "SELECT posts.id,posts.title, posts.content, users.userName FROM posts JOIN users ON (posts.user_id = users.id) where users.id = $1 ;",
    values: [userID],
  });
};

module.exports = getuserpostQuery;
