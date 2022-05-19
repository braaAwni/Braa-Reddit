//validation
//check email
//comparePassword
// set cookies
//handel errors
const signinSchema = require("../utils/validation/signinValidation");
const { getUserByEmail } = require("../database/query");
const customError = require("../utils/error/handelError");
const { compare } = require("bcryptjs");
const { signcookie } = require("../utils/cookies/cookiesPromise");
let userId = "";
const loginController = (req, res, next) => {
  const { email, password } = req.body;
  signinSchema
    .validateAsync(req.body)
    .then(() => getUserByEmail(email))
    .then((data) => {
      userId = data.rows[0].id;
      if (!data.rows.length) {
        throw customError("email not found", 401);
      } else {
        return compare(password, data.rows[0].password);
      }
    })
    .then((value) => {
      if (value === false) {
        throw customError("password error", 401);
      } else {
        return signcookie({ id: userId });
      }
    })
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

module.exports = loginController;
