require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const welcomeRouter = require("./Routes/welcomeRoute");
const courseRouter = require("./Routes/coursesRoutes");
const text = require("./utils/StatusTexts");
const app = express();
app.use(express.json());

app.use("/", welcomeRouter);
app.use("/api/courses", courseRouter);
app.all("*", (req, res) => {
  return res.status(404).json({
    status: text.ERROR,
    message: text.MESSAGE,
  });
});

const url = process.env.MONGO_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB Server Connected");
  })
  .catch((err) => {
    console.log("MongoDB Server Not Connected", err);
  });
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
