import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "1234",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
app.get("/", async (req, res) => {
  // get items
  items = (await db.query("select * from items order by id asc")).rows;
  // render home page
  res.render("index.ejs", 
    {listTitle: "Today", 
    listItems: items});
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem
  // insert into items table
  await db.query("insert into items (title) values ($1)", [item] );
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const updatedItem = req.body.updatedItemTitle
  const updatedId = req.body.updatedItemId
  await db.query("update items set title = ($1) where id = ($2)", [updatedItem, updatedId] );
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const deletedItemId = req.body.deleteItemId
  await db.query("DELETE FROM items WHERE id=($1)", [deletedItemId] );
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
