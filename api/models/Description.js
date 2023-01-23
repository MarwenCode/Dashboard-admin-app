import mongoose from "mongoose";

const DescriptionSchema = new mongoose.Schema({

    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      username: {
        type: String,
      },
   
      userId: {
        type: String,
      },
      text: {
        type: String,
      },
    },
    { timestamps: true,
      toJSON: { getters: true, virtuals: true },
      toObject: { virtuals: true } },


);

export default mongoose.model("Description", DescriptionSchema)