const express = require("express");
const app = express();
require("./config/dbconfig");
const authRouter = require("./routes/auth");

var cors = require("cors");
app.use(cors());

// const { json } = require("express");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(authRouter);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
