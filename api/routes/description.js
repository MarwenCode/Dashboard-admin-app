import express from "express";
import Ticket from "../models/Ticket.js";
import Description from "../models/Description.js";
const descriptionRoute = express.Router()


//add a description
descriptionRoute.post("/:ticketId", async (req, res) => {
    try {
      const newDescription = await new Description({
        ...req.body,
        ticketId: req.params.ticketId,
      });
      const savedDescription = await newDescription.save();
  
      res.status(200).json(savedDescription);
    } catch (error) {
      res.status(500).json(error);
    }
    console.log(req.body);
  });



//delete a description


//get a description 

descriptionRoute.get("/:ticketId", async (req, res) => {
    try {
      const description = await Description.find({
        answerId: req.params.questionId,
      });
  
      res.status(200).json(description);
    } catch (error) {
      res.status(500).json(error);
    }
  });



export default descriptionRoute