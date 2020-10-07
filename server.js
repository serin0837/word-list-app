// const uuid = require("uuid");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect(
    "mongodb+srv://serin:serin0837@cluster0.ai95b.mongodb.net/wordList?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("mongo connect"));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const words = [];

// no cors // local host
// app.options("/word", (req, res) => {
//   res.setHeader("accept", "application/json");
//   res.setHeader("access-control-allow-origin", "*");
//   res.setHeader("access-control-allow-methods", "*");
//   res.setHeader("access-control-allow-headers", "*");
//   res.status(200).end();
// });

app.use("/api", require("./routes/api"));
//get every word
// app.get("/word", (req, res) => {
//   console.log("received");
//   res.contentType("application/json");
//   res.setHeader("access-control-allow-origin", "*");
//   res.status(200).send(words);
// });

// //post new word
// app.post("/word", (req, res) => {
//   console.log(req.body);
//   const wordToAdd = {
//     id: uuid.v4(),
//     name: req.body.name,
//     meaning: req.body.meaning,
//     note: req.body.note,
//     remember: false,
//   };
//   words.push(wordToAdd);
//   res.contentType("application/json");
//   res.setHeader("access-control-allow-origin", "*");
//   res.status(201).send(wordToAdd);
// });
// // delete request
// app.delete("/word", (req, res) => {
//   console.log("id");
//   res.contentType("application/json");
//   res.setHeader("access-control-allow-origin", "*");
//   res.status(204);

//   words.filter((word) => {
//     return word.id !== req.body.id;
//   });
// });

// words: currentState.words.filter(

app.listen(process.env.PORT || 5000, () => {
  console.log("listening");
});
