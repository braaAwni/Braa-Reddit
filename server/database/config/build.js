const { readFileSync } = require("fs");
const { join } = require("path");

const connection = require("./connection");

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, "build.sql")).toString();
  return connection
    .query(sql)
    .then(() => console.log("build created successfully!"))
};
dbBuild();
module.exports = dbBuild;