import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    availableNumbers: {
      type: [mongoose.Schema.Types.Mixed],
    },
    unAvailableNumbers: {
      type: [mongoose.Schema.Types.Mixed],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tables", TableSchema);
