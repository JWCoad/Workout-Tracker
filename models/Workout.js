//dependeices

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// make schema for workout
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: "Date is required",
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is required.",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is required.",
      },
      distance: {
        type: Number,
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
      },
      weight: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
    },
  ],
});

// export mongoose model
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
