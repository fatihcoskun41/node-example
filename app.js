const express = require("express")
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed");
const app = express()

app.use(feedRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
