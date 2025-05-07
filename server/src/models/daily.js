import mongoose, { Schema, model, Document } from "mongoose";

const dailySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  boosts: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      count: Number,
    },
  ],
  date: {
    // always set to midnight
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  previous: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Daily",
  },
  next: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Daily",
  },
});

dailySchema.pre("save", function (next) {
  this.date = getMidnight(this.date);
  next();
});

const Daily = mongoose.model("Daily", dailySchema);
export default Daily;
