import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import Ficha from '@modules/fichas/infra/typeorm/entities/Ficha';
import uploadConfig from '@config/uploadConfig';
import AppError from '@shared/errors/AppError';

interface Request {
    idFicha: string;
}

class DeleteFichaService {
    public async execute({ idFicha }: Request): Promise<Ficha> {
        const fichasRepository = getRepository(Ficha);

        const ficha = await fichasRepository.findOne(idFicha);

        if (!ficha) {
            throw new AppError('Ficha inexistente.');
        }

        await fichasRepository.remove(ficha);

        const deleteFile1 = path.join(
            uploadConfig('arquivosFicha').directory,
            ficha.imgPerfil,
        );
        const deleteFile2 = path.join(
            uploadConfig('arquivosFicha').directory,
            ficha.gifFicha,
        );

        const deleteFile1Exists = await fs.promises.stat(deleteFile1);
        const deleteFile2Exists = await fs.promises.stat(deleteFile2);

        if (deleteFile1Exists) {
            await fs.promises.unlink(deleteFile1);
        }

        if (deleteFile2Exists) {
            await fs.promises.unlink(deleteFile2);
        }

        return ficha;
    }
}

export default DeleteFichaService;
