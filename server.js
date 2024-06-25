const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const api = require("./src/api");

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hello Dunia!");
});

module.exports = app;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
