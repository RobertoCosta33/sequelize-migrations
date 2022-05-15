const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor online em: http://localhost:${port}`);
});

routes(app);
