const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/userModel");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://thylme:12345@express-trial.jroaixj.mongodb.net/User?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database succesfully");
    app.listen(3000, () => {
      console.log("Server started successsfully at https://localhost:3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
