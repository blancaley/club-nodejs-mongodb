import express from "express";
import { MongoClient } from "mongodb";

const port = 3000;
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

// Läs från Mongo DB
const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("club");
const membersCollection = db.collection("members");

// Skapa en route
app.get('/members', async (req, res) => {
  const members = await membersCollection.find({}).toArray();
  console.log(members)
  res.render("members", {
    members
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));