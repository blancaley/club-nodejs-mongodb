import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const port = 3000;
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

// Läs från Mongo DB
const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("club");
const membersCollection = db.collection("members");

// Create a route for members list
app.get('/members', async (req, res) => {
  const members = await membersCollection.find({}).toArray();
  console.log(members)
  res.render("members", {
    members
  });
});

// Create a route for individual member
app.get("/member/:id", async (req, res) => {
  const member = await membersCollection.findOne({_id: ObjectId(req.params.id)});
  console.log(member)
  res.render("member", {
    name: member.name,
    email: member.email,
    phoneNumber: member.phoneNumber,
    dateRegistered: member.dateRegistered,
    notes: member.notes
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));