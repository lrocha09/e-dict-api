import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

interface Upload {
    directory: string;
    storage: multer.StorageEngine;
}

const uploadConfig = (pasta: string): Upload => {
    const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp', pasta);

    return {
        directory: tmpFolder,

        storage: multer.diskStorage({
            destination: tmpFolder,
            filename(request, file, callback) {
                const fileHash = crypto.randomBytes(10).toString('hex');
                const fileName = `${fileHash}-${file.originalname}`;

                return callback(null, fileName);
            },
        }),
    };
};

export default uploadConfig;
