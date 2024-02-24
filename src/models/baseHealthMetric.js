import mongoose from 'mongoose';

export const baseHealthMetricSchema = {
  date: { type: Date, required: true },
  qty: { type: Number, required: true },
  source: { type: String, required: false }
};

export const createHealthMetricModel = (name, schemaDefinition) => {
  const schema = new mongoose.Schema(schemaDefinition);
  return mongoose.model(name, schema);
};
