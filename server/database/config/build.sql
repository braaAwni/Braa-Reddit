BEGIN;
DROP TABLE IF EXISTS users,posts,comments CASCADE;
CREATE TABLE users (
  id  serial  PRIMARY KEY,
  userName  varchar(100)  NOT NULL,
  email varchar(100) UNIQUE NOT NULL,
  password  varchar(100)  NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON  DELETE CASCADE,
  title VARCHAR(250) NOT NULL,
  content TEXT NOT NULL
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON  DELETE CASCADE,
  post_id integer REFERENCES posts(id) ON  DELETE CASCADE,
  content TEXT NOT NULL
);

INSERT INTO users (userName,email,password) VALUES ('braa','braa@hotmail.com','a123456');
--  INSERT INTO posts (user_id,title,content) VALUES (1,"braa","braa awnii");
-- INSERT INTO comments (user_id,post_id,content) VALUES (1,1,'hello beroo');

COMMIT;
