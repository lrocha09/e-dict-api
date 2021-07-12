import { Router } from 'express';
import { getRepository } from 'typeorm';

import Favorito from '../models/Favorito';
import CreateFavService from '../services/CreateFavService';

const FavsRouter = Router();

FavsRouter.post('/', async (request, response) => {
    try {
        const { idUsuRef, idFichaRef } = request.body;

        const createFav = new CreateFavService();

        const favorito = await createFav.execute({
            idUsuRef,
            idFichaRef,
        });

        return response.json(favorito);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

FavsRouter.get('/', async (request, response) => {
    response.json(await getRepository(Favorito).find());
});

export default FavsRouter;
