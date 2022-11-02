import mongoose from "mongoose";

const TicketSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      // required: true,
    },
    title: { type: String, required: true, unique: true },
    product: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Ticket", TicketSchema);
