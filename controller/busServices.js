import BusServiceModel from "../models/busService.js";

// @desc    List bus services.
// @route   GET /api/bus-services/get-bus-services
// @access  Private
export const getBusServices = async (req, res) => {
  try {
    const { departureCity, arrivalCity } = req.body;
    const busServices = await BusServiceModel.find({
      departureCity,
      arrivalCity,
    });
    if (busServices.length === 0) {
      return res.status(404).send({
        message: "Bus services not found.",
      });
    }

    const responseData = busServices.map((service) => {
      return {
        _id: service._id,
        departureTime: service.departureTime,
        arrivalTime: service.arrivalTime,
        price: service.price,
      };
    });

    return res.status(200).send({
      message: "Bus services getted successfully.",
      data: responseData,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Error getting bus services.",
      err,
    });
  }
};

// @desc    Get bus service detail by id.
// @route   GET /api/bus-services/get-bus-service-detail/:id
// @access  Private
export const getBusServiceByid = async (req, res) => {
  try {
    const busServiceId = req.params.id;
    const busService = await BusServiceModel.findById(busServiceId);

    if (!busService) {
      return res
        .status(404)
        .send({ message: `No bus service with ${busServiceId} ids found.` });
    }
    return res.status(200).send({
      message: "Bus service getted successfully.",
      data: busService,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Error getting bus service detail.",
      err,
    });
  }
};
