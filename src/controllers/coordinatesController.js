import mongoose from 'mongoose';
import { InputDataSchema } from '../models/coordinatesModel'
const InputData = mongoose.model('InputData', InputDataSchema);
const addNewCoordinates = async (req, res) => {
    try {
      let newCoordinates = new InputData(req.body);
      let savedCoordinates = await newCoordinates.save();
      res.json(savedCoordinates);
    } catch (err) {
      res.send(err);
    }
  };

export default addNewCoordinates;
