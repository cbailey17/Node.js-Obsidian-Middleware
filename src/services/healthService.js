import { addGlucoseData } from "./glucoseService.js";

// Health data parsing
export function parseHealthData(data) {
    console.log('Parsing health data...');

    const metrics = data.metrics;
    const healthMetricsList = [];

    metrics?.forEach(metric => {
        if (metric?.name === 'blood_glucose') {
           console.log('Adding glucose data...');
           metric?.data.forEach(metricData => {
                const glucoseData = {
                     date: metricData?.date,
                     qty: metricData?.qty,
                };
                addGlucoseData(glucoseData);
           });
        }
    });

    metrics?.forEach(metric => {
        console.log(metric?.name)
    });
}

