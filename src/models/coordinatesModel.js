import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const InputDataSchema = new Schema({
  latitude: {
    type: Number,
    required: "Enter latitude"
  },
  longitude: {
    type: Number,
    required: "Enter longitude"
  },
  altitude: {
    type: Number,
    required: "Enter altitude"
  },
  ecef: {
    type: Array
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})