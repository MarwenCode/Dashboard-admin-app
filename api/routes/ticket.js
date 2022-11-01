import express from "express";
import Ticket from "../models/Ticket.js";
const ticketRoute = express.Router();

//create a ticket
ticketRoute.post("/", async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    const ticket = await newTicket.save();
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update a ticket
ticketRoute.put("/:id", async (req, res) => {
  try {
    // const ticket = await Ticket.findById(req.params.id);

    try {
      const updateTicket = await Ticket.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateTicket);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a ticket
ticketRoute.delete("/:id", async(req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (ticket.id === req.body.ticketId) {
            try {
              await ticket.deleteOne();
              res.status(200).json("ticket has been deleted");
            } catch (error) {
              res.status(500).json(error);
            }
          } else {
            res.status(401).json("only admin can delete the ticket");
          }

        
    } catch (error) {
        
    }
})


//get all tickets 
ticketRoute.get("/", async(req, res) => {
    try {
        const ticket = await Ticket.find()
        res.status(200).json(ticket)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})

export default ticketRoute;
