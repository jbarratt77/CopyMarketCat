require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  const serveFile = (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  };
  app.get(["/app", "/app/*"], serveFile);
}

app.use(function (err, req, res, next) {
  console.error(err.stack);
  return res.status(err.status).json({ message: err.message });
});

app.listen(5000, () => console.log(`Listening on port 5000`));
