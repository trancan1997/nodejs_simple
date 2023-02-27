const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render('index.ejs');
});

// app.get("/.netlify/functions/api/add", (req, res) => {
//   res.json({
//     status: true,
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
