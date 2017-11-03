DROP DATABASE IF EXISTS students;
CREATE DATABASE students;

\c students;

CREATE TABLE student (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  gender VARCHAR,
  occupation VARCHAR,
  status VARCHAR,
  dob DATE
);

INSERT INTO student (name, gender, occupation, status, dob)
  VALUES ('Kingsley', 'M', 'developer', 'active', '01/25/1900');