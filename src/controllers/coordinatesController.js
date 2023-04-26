import mongoose from 'mongoose';
import { InputDataSchema } from '../models/coordinatesModel'
const InputData = mongoose.model('InputData', InputDataSchema);
const addNewCoordinates = async  (req,res) => {
  let newCoordinates =  new InputData(req.body);
   await newCoordinates.save((err, coordinates) => {
    if (err) {
      res.send(err)
    }
    res.json(coordinates)
  })
}

export default addNewCoordinates;
