import mongoose from "mongoose";
import { CoordinatesSchema } from "../models/coordinatesModel";
const CoordinateData = mongoose.model("position", CoordinatesSchema);

// TODO: Not fully working
export const addNewCoordinates = async (req, res) => {
  try {
    let newCoordinates = new CoordinateData(req.body);
    let savedCoordinates = await newCoordinates.save();
    res.json(savedCoordinates);
  } catch (err) {
    res.send(err);
  }
};

export const getCoordinates = async (req, res) => {
    try {
      const coordinates = await CoordinateData.find({}).exec();
      res.json(coordinates);
    } catch (err) {
      res.send(err);
    }
  };
  