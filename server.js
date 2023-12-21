const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/userModel");

const app = express();

app.use(express.json());

//default route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//create user
app.post("/signup", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//getUSers in db
app.get("/getUsers", async (req, res) => {
  try {
    const user = await User.find(
      {},
      { __v: 0, password: 0, createdAt: 0, updatedAt: 0 }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update user in db
app.put("/updateUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      console.log("User not found");
      res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await User.findById(id, {
      __v: 0,
      password: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://thylme:12345@express-trial.jroaixj.mongodb.net/Node-API?retryWrites=true&w=majority"
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
