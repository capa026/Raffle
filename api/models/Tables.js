import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
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
