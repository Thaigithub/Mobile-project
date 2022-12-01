// WIP
var router = require("express").Router();

const svc = require("../firebaseService");

router.get("/", function (req, res) {
  res.send();
});

router.post("/new", (req, res) => {
  const uid = `${req.query.uid}`;
  const name = req.query.name;
  const email = req.query.email;
  svc.writeData(uid, name, email);
  res.send("Sent");
});

module.exports = router;
