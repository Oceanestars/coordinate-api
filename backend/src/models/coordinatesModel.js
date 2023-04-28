import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const CoordinatesSchema = new Schema({
  timestamp: {
    type: mongoose.Types.Decimal128,
    required: "Enter timestamp"
  },
  latitude: {
    type: mongoose.Types.Decimal128,
    required: "Enter latitude"
  },
  longitude: {
    type: mongoose.Types.Decimal128,
    required: "Enter longitude"
  },
  altitude: {
    type: mongoose.Types.Decimal128,
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