const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
var metrics = require("./data/metrics.json");

// defining the Express app
const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.get("/metrics", (req, res) => {
  return res.send(metrics);
});

// POST
app.post("/metrics/:id", (req, res) => {
  const { id } = req.params;
  const isValidId = Boolean(metrics.data.find((metric) => metric.id === id));

  if (!isValidId) return res.status(400).end();

  const newMetrics = metrics.data.filter((metric) => metric.id !== id);

  metrics.data = [req.body, ...newMetrics];
  return res.send(metrics);
});

// starting the server
app.listen(8000, () => {
  console.log("listening on port 3001");
});
