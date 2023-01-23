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
    toJSON: { getters: true, virtuals: true },
    toObject: { virtuals: true },
  }
);

TicketSchema.virtual("descriptions", {
  ref: "Description",
  localField: "_id",
  foreignField: "TicketId",
  justOne: false,
})

export default mongoose.model("Ticket", TicketSchema);
