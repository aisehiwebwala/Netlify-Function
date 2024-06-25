const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "I am API" });
});
router.post("/", (req, res) => {
  const data = req.body;
  res.json({ data });
});


module.exports = router;