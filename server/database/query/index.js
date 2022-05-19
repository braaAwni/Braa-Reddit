const getUserByEmail = require("./getUserByEmailQuery");
const postUserQuery = require("./postUserQuery");
const addpostQuery = require("./addpostQuery");
const getpostQuery = require("./getpostQuery");
const getUserByname = require("./getUsernameQuery");
const getuserpostQuery = require("./getUserPostQuery");
const deletePostQuery = require("./deletePostQuery");
const addCommentQuery = require("./addCommentQuery");
const getPostCommentsQuery = require("./getCommentsQurey");
const getSinglePostQuery = require("./getSinglePostQuery");
module.exports = {
  getUserByEmail,
  postUserQuery,
  addpostQuery,
  getpostQuery,
  getUserByname,
  getuserpostQuery,
  deletePostQuery,
  addCommentQuery,
  getPostCommentsQuery,
  getSinglePostQuery,
};
