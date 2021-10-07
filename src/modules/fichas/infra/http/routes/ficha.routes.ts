import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';

import Ficha from '@modules/fichas/infra/typeorm/entities/Ficha';
import ImagemFicha from '@modules/fichas/infra/typeorm/entities/ImagemFicha';

import CreateFichaService from '@modules/fichas/services/CreateFichaService';
import CreateImgFichaService from '@modules/fichas/services/CreateImgFichaService';
import DeleteFichaService from '@modules/fichas/services/DeleteFichaService';

import uploadConfig from '@config/uploadConfig';

const fichasRouter = Router();
const arquivosFicha = multer(uploadConfig('arquivosFicha'));
const imgsFicha = multer(uploadConfig('imgsFicha'));

interface Request {
    [key: string]: any | number | [] | string;
}

interface Array {
    [key: number]: any | number | [];
}

interface File {
    [key: string]: Array;
}

fichasRouter.post(
    '/new',
    arquivosFicha.fields([
        {
            name: 'file1',
            maxCount: 1,
        },
        {
            name: 'file2',
            maxCount: 1,
        },
    ]),
    async (request, response) => {
        const {
            numFicha,
            termoGen,
            toponiPt,
            tipoAcident,
            localFicha,
            taxmPt,
            origFicha,
            histFicha,
            infoEnc,
            taxmLib,
            morfoLib,
            contextLib,
            fontFicha,
        } = request.body;

        const arquivos = request.files as File;
        const imgPerfil = arquivos.file1[0].filename;
        const gifFicha = arquivos.file2[0].filename;
        const createFicha = new CreateFichaService();

        const ficha = await createFicha.execute({
            numFicha,
            termoGen,
            toponiPt,
            tipoAcident,
            localFicha,
            taxmPt,
            origFicha,
            histFicha,
            infoEnc,
            taxmLib,
            morfoLib,
            contextLib,
            fontFicha,
            imgPerfil,
            gifFicha,
        });

        return response.json(ficha);
    },
);

fichasRouter.delete('/delete/:idFicha', async (request, response) => {
    const { idFicha } = request.params;
    const deleteFicha = new DeleteFichaService();
    const ficha = await deleteFicha.execute({ idFicha });

    return response.json(ficha);
});

fichasRouter.post(
    '/new/:idFicha',
    imgsFicha.array('files'),
    async (request, response) => {
        const { idFicha } = request.params;
        const arquivos = request.files as Request;

        const imgRes = [];

        const createImgFicha = new CreateImgFichaService();

        for (let index = 0; index < arquivos.length; index += 1) {
            const imgFicha = arquivos[index].filename;

            const imgficha = await createImgFicha.execute({
                idFichaRef: idFicha,
                imgFicha,
            });

            imgRes.push(imgficha);
        }

        return response.json({
            idFicha,
            imagens: imgRes,
        });
    },
);

fichasRouter.get('/', async (request, response) => {
    response.json(await getRepository(Ficha).find());
});

fichasRouter.get('/imgs', async (request, response) => {
    response.json(await getRepository(ImagemFicha).find());
});

fichasRouter.get('/:id', async (request, response) => {
    const { id } = request.params;

    return response.json(
        await getRepository(Ficha).findOne({
            where: { idFicha: id },
        }),
    );
});

export default fichasRouter;
