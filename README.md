Steps to run the project:
Database steps:
- Create DB called permalist
- create table inside permalist called items
- CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');
---------------------------------------------------------------------
Steps from local machine:
1 - download project files
2 - go to project folder
3 - from cmd: npm init
4 - from cmd: npm install nodemon
5 - from cmd: nodemon index.js
---------------------------------------------------------------------
How to test the project?
- navigate to http://localhost:3000/
- start adding, editing and deleting tasks in the todo list
- 
