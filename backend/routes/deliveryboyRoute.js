import express from "express";
import { addDeliveryboy } from "../controllers/deliveryboyController.js";

const DeliveryboyRouter = express.Router();

DeliveryboyRouter.post("/register", addDeliveryboy);

export default DeliveryboyRouter;

