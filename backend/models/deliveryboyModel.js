import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const deliveryboySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid email format"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
    match: [/^\d{10}$/, "Phone number must be 10 digits"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    set: (value) => bcrypt.hashSync(value, bcrypt.genSaltSync(10)),
  },
  vehicletype: {
    type: String,
    required: [true, "Vehicle type is required"],
    enum: ["bike", "scooter", "cycle"],
  },
  licencenumber: {
    type: String,
    validate: {
      validator: function (v) {
        return this.vehicletype === "cycle" ? true : !!v;
      },
      message: "License number is required for motor vehicles",
    },
  },
  panNumber: {
    type: String,
    required: [true, "PAN number is required"],
    unique: true,
    match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
   
  },
});

const Deliveryboy = mongoose.model("Deliveryboy", deliveryboySchema);
export default Deliveryboy;
