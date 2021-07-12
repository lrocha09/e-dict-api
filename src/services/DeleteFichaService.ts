import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import Ficha from '../models/Ficha';
import uploadConfig from '../config/uploadImg';

interface Request {
    idFicha: string;
}

interface Response {
    ficha: Ficha;
}
class DeleteFichaService {
    public async execute({ idFicha }: Request): Promise<Response> {
        const fichasRepository = getRepository(Ficha);

        const ficha = await fichasRepository.findOne(idFicha);

        if (!ficha) {
            throw new Error('Ficha not found.');
        }

        await fichasRepository.remove(ficha);

        const deleteFile1 = path.join(uploadConfig.directory, ficha.imgPerfil);
        const deleteFile2 = path.join(uploadConfig.directory, ficha.gifFicha);

        const deleteFile1Exists = await fs.promises.stat(deleteFile1);
        const deleteFile2Exists = await fs.promises.stat(deleteFile2);

        if (deleteFile1Exists) {
            await fs.promises.unlink(deleteFile1);
        }

        if (deleteFile2Exists) {
            await fs.promises.unlink(deleteFile2);
        }

        return { ficha };
    }
}

export default DeleteFichaService;
