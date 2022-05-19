const jwt = require("jsonwebtoken");

require("env2")(".env");

const signcookie = (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign(id, process.env.PRIVATEKEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

const veryfy = (id) => {
  return new Promise((resolve, reject) => {
    jwt.verify(id, process.env.PRIVATEKEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = { signcookie, veryfy };
