import { Glucose, Insulin, HeadphoneAudioExposure } from "../models/HealthMetricsModels.js";

export const addGlucoseData = async (data) => {
  return await Glucose.create(data);
};
