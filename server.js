import express from "express";

const port = 3000;
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");