const mongoose = require("mongoose");
const graphSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  lowRisk: {
    type: Number,
    required: true,
  },
  mediumRisk: {
    type: Number,
    required: true,
  },
  highRisk: {
    type: Number,
    required: true,
  },
});

//We will create new collection
const Graph = new mongoose.model("Graph", graphSchema);

module.exports = Graph;
