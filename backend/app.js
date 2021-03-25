const express = require("express");
const app = express();
require("./config/dbconfig");

var cors = require("cors");
app.use(cors());

const Graph = require("./models/Graph");
const { json } = require("express");
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/createdata", async (req, res) => {
  try {
    console.log(req.body);
    const graphData = new Graph(req.body);
    const demo = await graphData.save();
    res.status(201).send(demo);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/getdata", async (req, res) => {
  try {
    const data = await Graph.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
