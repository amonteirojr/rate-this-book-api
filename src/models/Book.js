const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  isbn: Number,
  name: String,
  coverUrl: String,
  rating: Number,
  promotionalPrice: Number,
  price: Number,
  score: Number,
  scores: [
    {
      name: String,
      value: Number,
    },
  ],
  extras: [
    {
      title: String,
      value: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", BookSchema);
