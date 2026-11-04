const usuarioRoutes = require("./routes/usuarioRoutes");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ status: "OK" });
});

app.use("/usuarios", usuarioRoutes);

app.listen(port, () => {
  console.log(`API servida em: http://localhost:${port}`);
});
