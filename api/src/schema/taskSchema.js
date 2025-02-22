import mongoose, { Mongoose } from "mongoose";

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: "entry",
  },
  difficulty: {
    type: String,
    default: "easy",
  },
  priority: {
    type: String,
    default: "low",
  },
});

const taskModel = mongoose.model("task", TaskSchema);
export default taskModel;
