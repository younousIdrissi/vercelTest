const express = require("express");
const convertImage = require('./routes/convertImage')
const cors = require('cors');

const app = express();
app.use(cors("*"));


app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use('/api', convertImage)

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
