import mongoose  from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: 
    { type: String,
         required: true,
          unique: true  
    },
    desc: {
         type: String,
          required: true
    },
    img: {
     type: Buffer,
      required: true
     },
    brand: {
         type: String,
     },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    status: { type: String },

  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);