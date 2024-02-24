import { Router } from 'express';
import { parseHealthData } from '../services/healthService.js';

const router = Router();

router.post('/healthdata', (req, res) => {
    try {
        parseHealthData(req.body.data);
        res.send('Data received and forwarded for processing.');
    } catch (err) {
        res.status(500).send('An error occurred while processing the data');
    }
});

export default router;
