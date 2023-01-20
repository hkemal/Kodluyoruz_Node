const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Index Sayfasi");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Sayfasi");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact Sayfasi");
});

app.get("*", (req, res) => {
  res.status(404).send("Sayfa Bulunamadi");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port} da çalişmaya başladi`);
});
