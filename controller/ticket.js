import ticketModel from "../models/ticket.js";
import UserModel from "../models/user.js";
import busServiceModel from "../models/busService.js";

// @desc    Buy ticket.
// @route   POST /api/ticket/buy-ticket
// @access  Private
export const buyTicket = async (req, res) => {
  try {
    const { busServiceId, userId, tickets } = req.body;
    // Otobus seferi varmi kontrolu.
    const busService = await busServiceModel.findById({ _id: busServiceId });
    if (!busService) {
      return res.status(404).send({
        message: "Bus service not found.",
      });
    } else {
      if (busService.availableSeatsCount - tickets.length <= 0) {
        return res.status(400).send({
          message:
            "Almak istediginiz bilet sayisi otobuste alinabilecek bilet sayisindan fazla.",
        });
      }
    }
    if (tickets.length > 5) {
      return res.status(400).send({
        message: "Tek seferde yalnizca 5 bilet alabilirsiniz.",
      });
    } else {
      // Kullanici var mi kontrolu.
      const user = await UserModel.findById({ _id: userId });
      if (!user) {
        return res.status(404).send({
          message: "User not found.",
        });
      }
      for (const ticket in tickets) {
        // max min kontrolu
        if (
          busService.lastSeatNumber < ticket.seatNumber ||
          busService.firstSeatNumber > ticket.seatNumber
        ) {
          return res.status(400).send({
            message: "Lutfen otobuste bulunan bir koltuk giriniz.",
          });
        }
        if (busService.bookedSeats.includes(ticket.seatNumber)) {
          // Koltuk satin alinabilir mi kontrolu.
          return res.status(400).send({
            message: "koltugu satin alamazsiniz.",
          });
        } else {
          // Satin alinacak koltugun yanindaki koltugun kontrolu.
          if (ticket.seatNumber % 2 == 0) {
            const sidePassenger = busService.bookedPassengers.find(
              (passenger) => passenger.seatNumber === ticket.seatNumber - 1
            );
            if (
              sidePassenger &&
              !(sidePassenger.gender === ticket.ticketOwnerGender)
            ) {
              return res.status(400).send({
                message: "Cinsiyet uyumsuzligi nedeniyle satin alamazsiniz.",
              });
            }
          } else {
            const sidePassenger = busService.bookedPassengers.find(
              (passenger) => passenger.seatNumber === ticket.seatNumber + 1
            );
            if (
              sidePassenger &&
              !(sidePassenger.gender === ticket.ticketOwnerGender)
            ) {
              return res.status(400).send({
                message: "Cinsiyet uyumsuzligi nedeniyle satin alamazsiniz.",
              });
            }
          }
        }
      }
      tickets.map(async (ticket) => {
        await ticketModel.create({
          busServiceId: busServiceId,
          userId: userId,
          departureCity: busService.departureCity,
          arrivalCity: busService.arrivalCity,
          departureTime: busService.departureTime,
          arrivalTime: busService.arrivalTime,
          seatNumber: ticket.seatNumber,
          ticketOwner: ticket.ticketOwner,
          ticketOwnerGender: ticket.ticketOwnerGender,
        });

        const updatedBookedSeats = [...busService.bookedSeats];
        const updatedBookedPassengers = [...busService.bookedPassengers];
        const updatedAvailableSeats = busService.availableSeats.filter(
          (seatNumber) => seatNumber !== ticket.seatNumber
        );

        updatedBookedSeats.push(ticket.seatNumber);
        updatedBookedPassengers.push({
          seatNumber: ticket.seatNumber,
          gender: ticket.ticketOwnerGender,
        });

        busService.availableSeats = updatedAvailableSeats;
        busService.availableSeatsCount = busService.availableSeatsCount - 1;
        busService.bookedSeats = updatedBookedSeats;
        busService.bookedPassengers = updatedBookedPassengers;

        await busServiceModel.findByIdAndUpdate(busServiceId, busService);
      });
      return res.status(201).send({
        message: "Ticket created successfully.",
      });
      // }
    }
  } catch (err) {
    return res.status(500).send({
      message: "Error buying ticket.",
      err,
    });
  }
};

// @desc    Get user tickets.
// @route   GET /api/ticket/get-user-tickets
// @access  Private
export const getUserTickets = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    const tickets = await ticketModel.find({ userId: userId });
    return res
      .status(200)
      .send({ message: "Tickets getting successfully.", data: tickets });
  } catch (err) {
    return res.status(500).status({
      message: "Error getting tickets",
    });
  }
};

// @desc    Get ticket details.
// @route   GET /api/ticket/get-ticket-details
// @access  Private
export const getTicketDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await ticketModel.findOne({ _id: id });
    if (!ticket) {
      return res.status(404).send({ message: "Ticket not found." });
    }
    return res.status(200).send({
      message: "Ticket details getting successfully.",
      data: {
        departureCity: ticket.departureCity,
        arrivalCity: ticket.arrivalCity,
        departureTime: ticket.departureTime,
        seatNumber: ticket.seatNumber,
        ticketOwner: ticket.ticketOwner,
      },
    });
  } catch (err) {
    return res.status(500).status({
      message: "Error getting ticket detail",
    });
  }
};
