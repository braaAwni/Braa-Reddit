//validation
//check email
//hashedPassword
//addUser query
// set cookies
//handel errors

const signupSchema = require("../utils/validation/signupValidation");
const { getUserByEmail, postUserQuery } = require("../database/query");
const customError = require("../utils/error/handelError");
const { hash } = require("bcryptjs");
const { signcookie } = require("../utils/cookies/cookiesPromise");

const signUpController = (req, res, next) => {
  const { username, email, password } = req.body;
  signupSchema
    .validateAsync(req.body, { abortEarly: false })
    .then(() => getUserByEmail(email))
    .then((data) => {
      if (data.rows.length === 1) {
        throw customError("sorry email found => try again", 401);
      } else {
        return hash(password, 10);
      }
    })
    .then((hashpassword) => postUserQuery(username, email, hashpassword))
    .then((value) => signcookie({ id: value.rows[0].id }))
    .then((token) =>
      res
        .cookie("id", token, { httpOnly: true })
        .status(201)
        .json({ massage: "Now You are have account", state: true })
    )
    .catch((err) => {
      if (err.name === "ValidationError") {
        const errorList = [];
        err.details.forEach((error) => {
          errorList.push(error.message);
        });
        next(customError(errorList, 400));
      } else {
        next(err);
      }
    });
};

module.exports = signUpController;
