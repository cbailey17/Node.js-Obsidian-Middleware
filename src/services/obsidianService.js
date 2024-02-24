import config from '../config/config.json' assert { type: 'json' };
import fs from 'fs';

function writeToVaultFile(data) {
    const filePath = config.healthFolderPath + "/applehealth.json";

    const dataString = JSON.stringify(data, null, 2);

    fs.writeFile(filePath, dataString, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Data saved to ${filePath}`);
        }
    });
}
