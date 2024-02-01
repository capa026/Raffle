import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    availableNumbers: {
      type: [Number],
    },
    unAvailableNumbers: {
      type: [Number],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tables", TableSchema);
