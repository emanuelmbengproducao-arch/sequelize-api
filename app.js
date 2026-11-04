require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`API servida em: http://localhost:${port}`);
});
