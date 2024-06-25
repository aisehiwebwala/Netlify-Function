const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const api = require("./src/api");

app.use("/api", api);

app.get("/", (req, res) => {
  console.log("Request Recieved at : ",new Date().toISOString()," from ",req.get("host);
  res.send("Hello Dunia!");
});

module.exports = app;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
