const express = require("express");
const rootRouter = require("./routes/router");

const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to db successfully"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>you have reached the server of remba</h1>");
});

app.use("/api/v1", rootRouter);

app.listen(port, () => console.log(`server running at  localhost:${port}`));
