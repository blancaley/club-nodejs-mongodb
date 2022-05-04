import express from "express";

const port = 3000;
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(port, () => console.log(`Listening on port ${port}`));