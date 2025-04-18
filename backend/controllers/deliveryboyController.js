import Deliveryboy from "../models/deliveryboyModel.js";

export const addDeliveryboy = async (req, res) => {
  try {
    

    const { fullName, email, phone, password, vehicletype, licencenumber, panNumber, address } = req.body;

    if (!fullName || !email || !phone || !password || !vehicletype || !panNumber || !address) {
   
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if delivery boy already exists
    const existingDeliveryboy = await Deliveryboy.findOne({ $or: [{ email }, { phone }, { panNumber }] });
    if (existingDeliveryboy) {
      
      return res.status(400).json({ success: false, message: "User already exists with email, phone, or PAN" });
    }

    const newDeliveryboy = new Deliveryboy({
      fullName,
      email,
      phone,
      password,
      vehicletype,
      licencenumber: vehicletype === "cycle" ? null : licencenumber,
      panNumber,
      address,
    });

    await newDeliveryboy.save();
   

    res.status(201).json({ success: true, message: "Delivery boy registered successfully" });
  } catch (error) {

    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};


