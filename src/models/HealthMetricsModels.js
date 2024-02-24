import { getDb } from '../config/db.js';
import { createHealthMetricModel, baseHealthMetricSchema } from './baseHealthMetric.js';

console.log('Creating health metric models...');
export const Glucose = createHealthMetricModel('Glucose', baseHealthMetricSchema);

export const Insulin = createHealthMetricModel('Insulin', baseHealthMetricSchema);

export const HeadphoneAudioExposure = createHealthMetricModel('HeadphoneAudioExposure', baseHealthMetricSchema);

const PhysicalEffort = createHealthMetricModel('PhysicalEffort', baseHealthMetricSchema);

const WalkingRunningDistance = createHealthMetricModel('WalkingRunningDistance', baseHealthMetricSchema);

const Weight = createHealthMetricModel('Weight', baseHealthMetricSchema);

const carbohydrates = createHealthMetricModel('carbohydrates', baseHealthMetricSchema);

const alchohol_consumption = createHealthMetricModel('alchohol_consumption', baseHealthMetricSchema);

const protein = createHealthMetricModel('protein', baseHealthMetricSchema);

const mindfulness_minutes = createHealthMetricModel('mindfulness_minutes', baseHealthMetricSchema);

const heartRateSchema = {
  ...baseHealthMetricSchema,
  avg: { type: Number, required: true },
  max: { type: Number, required: true },
  min: { type: Number, required: true }
};
const HeartRate = createHealthMetricModel('HeartRate', heartRateSchema);

const sleepAnalysisSchema = {
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  ...baseHealthMetricSchema,
  value: { type: String, required: true }
};
const SleepAnalysis = createHealthMetricModel('SleepAnalysis', sleepAnalysisSchema);

export default { Glucose, Insulin, HeadphoneAudioExposure, PhysicalEffort, WalkingRunningDistance, Weight, carbohydrates, alchohol_consumption, protein, mindfulness_minutes, HeartRate, SleepAnalysis };