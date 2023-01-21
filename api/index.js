import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import ticketRoute from "./routes/ticket.js";
import cors from "cors";


//define app
const app = express();
dotenv.config();



//MONGO
const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("connected to MongoDB");
    } catch (error) {
      throw error;
    }
  };

  app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }))
  


  app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/ticket", ticketRoute)



app.use(cors());

//port
app.listen(process.env.PORT , () => {
    connect();
    console.log("connected to backend");
  });