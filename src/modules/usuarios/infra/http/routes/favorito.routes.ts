import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateFavService from '@modules/usuarios/services/CreateFavService';
import DeleteFavService from '@modules/usuarios/services/DeleteFavService';
import Favorito from '@modules/usuarios/infra/typeorm/entities/Favorito';

const FavsRouter = Router();

FavsRouter.post('/', async (request, response) => {
    const { idUsuRef, idFichaRef } = request.body;
    const createFav = new CreateFavService();
    const favorito = await createFav.execute({
        idUsuRef,
        idFichaRef,
    });

    return response.json(favorito);
});

FavsRouter.delete('/delete/:idFav', async (request, response) => {
    const { idFav } = request.params;
    const deleteFav = new DeleteFavService();
    const favorito = await deleteFav.execute({
        idFav,
    });

    return response.json(favorito);
});

FavsRouter.get('/:idUsu', async (request, response) => {
    const { idUsu } = request.params;

    return response.json(
        await getRepository(Favorito).find({
            where: { idUsuRef: idUsu },
        }),
    );
});

FavsRouter.get('/', async (request, response) => {
    response.json(await getRepository(Favorito).find());
});

export default FavsRouter;
