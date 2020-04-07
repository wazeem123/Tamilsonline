var express = require("express");
const path = require("path");
var app = express();

const months = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];

const days = [
  { id: 1, name: "one" },
  { id: 2, name: "Tu" },
  { id: 3, name: "free" },
  { id: 4, name: "four" },
  { id: 5, name: "five" },
  { id: 6, name: "six" },
  { id: 7, name: "seven" },
  { id: 8, name: "eight" },
  { id: 9, name: "nine" },
  { id: 10, name: "ten" },
  { id: 11, name: "eleven" },
  { id: 12, name: "twelve" },
];

app.get("/months", (req, res, next) => {
  res.json(months);
});

app.get("/days", (req, res, next) => {
  res.json(days);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
