const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get every word
app.get("/word", (req, res) => {
  console.log("received");
  res.contentType("application/json");
  res.setHeader("access-control-allow-origin", "*");
  res.status(200).send([
    {
      id: 1,
      name: "하다",
      meaning: "do",
      note: "공부하다",
      remember: "false",
    },
    {
      id: 2,
      name: "선생님",
      meaning: "teacher",
      note: "선생님<-> 학생",
      remember: "false",
    },
    {
      id: 3,
      name: "학생",
      meaning: "student",
      note: "학생이 공부하다",
      remember: "false",
    },
  ]);
});

//post new word
app.post("/word", (req, res) => {
  console.log(req.body);
  res.send(
    `I receive your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
