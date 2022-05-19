const connection = require("../database/config/connection");
const dbBuild = require("../database/config/build");
const {
  getUserByEmail,
  postUserQuery,
  addpostQuery,
  getpostQuery,
  getuserpostQuery,
  deletePostQuery,
  getSinglePostQuery,
} = require("../database/query");

beforeEach(() => dbBuild());
afterAll(() => connection.end());

test("test get post", () => {
  return getpostQuery().then((data) => {
    expect(data.rowCount).toBe(0);
    // console.log(data);
  });
});

test("test add post", () => {
  return addpostQuery(1, "corona", "covid").then((data) => {
    expect(data.rowCount).toBe(1);
    expect(data.rows[0].title).toBe("corona");
  });
});

test("test add user", () => {
  return postUserQuery("braa", "braa222@hotmail.com", "asd123456").then(
    (data) => {
      expect(data.rowCount).toBe(1);
    }
  );
});

test("test get user by email", () => {
  return getUserByEmail("braa@hotmail.com").then((data) => {
    expect(data.rowCount).toBe(1);
    expect(data.rows[0].username).toBe("braa");
  });
});

test("test get posts to one user", () => {
  return getuserpostQuery(1).then((data) => {
    expect(data.rowCount).toBe(0);
  });
});

test("test delete posts ", () => {
  return deletePostQuery(2).then((data) => {
    expect(data.rowCount).toBe(0);
  });
});

test("test get single posts ", () => {
  return getSinglePostQuery(1).then((data) => {
    expect(data.rowCount).toBe(0);
  });
});
