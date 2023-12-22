const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    item_id: {
      type: String,
      unique: true,
      required: [true, "An itemId is needed to post to database"],
    },
    item_name: {
      type: String,
      required: [true, "Please enter your item name"],
    },
    item_price: {
      type: String,
      required: true,
    },
    item_description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
