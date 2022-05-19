const connection = require("../config/connection");

const getUserByname = (userID) => {
  return connection.query({
    text: "select * from users where id = $1 ;",
    values: [userID],
  });
};

module.exports = getUserByname;
