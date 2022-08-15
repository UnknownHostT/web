const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/*", (req, res) =>
{
  res.sendFile(path.join(__dirname, "404.html"));
})

app.listen(3000, () =>
{
  console.log("Web běží!")
});