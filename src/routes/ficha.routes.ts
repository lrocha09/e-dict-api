import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';

import Ficha from '../models/Ficha';
import ImagemFicha from '../models/ImagemFicha';
import Categoria from '../models/Categoria';

import CreateFichaService from '../services/CreateFichaService';
import CreateImgFichaService from '../services/CreateImgFichaService';
import CreateCategoriaService from '../services/CreateCategoriaService';
import DeleteFichaService from '../services/DeleteFichaService';

import uploadConfig from '../config/uploadImg';
import uploadImgConfig from '../config/uploadImgsFicha';

const fichasRouter = Router();
const uploadImg = multer(uploadConfig);
const uploadImgsFicha = multer(uploadImgConfig);

interface Request {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any | number | [] | string;
}

interface Array {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: number]: any | number | [];
}

interface File {
    [key: string]: Array;
}

fichasRouter.post(
    '/new',
    uploadImg.fields([
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
        try {
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

            console.log(arquivos.file1[0]);

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
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    },
);

fichasRouter.delete('/delete/:id', async (request, response) => {
    try {
        const idFicha = request.params;

        const deleteFicha = new DeleteFichaService();

        const ficha = await deleteFicha.execute({ idFicha: idFicha.id });

        return response.json(ficha);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

fichasRouter.post(
    '/new/:id',
    uploadImgsFicha.array('files'),
    async (request, response) => {
        try {
            const idFichaRef = request.params;
            const arquivos = request.files as Request;
            const tags = request.body;

            const imgRes = [];
            const tagRes = [];

            const createImgFicha = new CreateImgFichaService();
            const createCategoria = new CreateCategoriaService();

            for (let index = 0; index < arquivos.length; index += 1) {
                const imgFicha = arquivos[index].filename;

                const imgficha = await createImgFicha.execute({
                    idFichaRef: idFichaRef.id,
                    imgFicha,
                });

                imgRes.push(imgficha);
            }

            for (let index = 0; index < tags.tag.length; index += 1) {
                const tag = tags.tag[index];

                const categoria = await createCategoria.execute({
                    idFichaRef: idFichaRef.id,
                    tag,
                });

                tagRes.push(categoria);
            }

            return response.json({
                idFicha: idFichaRef.id,
                Categorias: tagRes,
                imagens: imgRes,
            });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    },
);

fichasRouter.get('/:id', async (request, response) => {
    const { id } = request.params;

    return response.json(
        await getRepository(Ficha).findOne({
            where: { idFicha: id },
        }),
    );
});

fichasRouter.get('/', async (request, response) => {
    response.json(await getRepository(Ficha).find());
});

fichasRouter.get('/imgs', async (request, response) => {
    response.json(await getRepository(ImagemFicha).find());
});

fichasRouter.get('/tags', async (request, response) => {
    response.json(await getRepository(Categoria).find());
});

export default fichasRouter;
