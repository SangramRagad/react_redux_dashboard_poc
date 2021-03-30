const express = require("express");
const { signUp, signIn } = require("../controllers/auth");
const { createGraphData, getGraphData } = require("../controllers/graph");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/createdata", createGraphData);
router.get("/getdata", getGraphData);

module.exports = router;
