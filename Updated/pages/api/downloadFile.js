import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.resolve('/Files/Sagnik_updated.pdf'); // Path to your file
    const fileName = 'Sagnik_cv.pdf'; // Name of the file when downloaded

    fs.access(filePath, fs.constants.R_OK, (err) => {
        if (err) {
            res.status(404).end();
            return;
        }

        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        fs.createReadStream(filePath).pipe(res);
    });
}
