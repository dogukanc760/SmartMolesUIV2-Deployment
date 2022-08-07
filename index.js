const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

//add routes

//app allow
dotenv.config();
app.use(cors());
app.use(express.json());
app.options("*", cors());

// app.get("/", (req, res) => {
//   try {
//     res.status(200).json({ message: "Api is working! Say hello" });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });

app.use(express.static(path.resolve(__dirname, './build')));

// Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log("server running at " + process.env.PORT);
});
