import { Router } from 'express';
import { getRepository } from 'typeorm';

import Administrador from '../models/Administrador';
import CreateAdmService from '../services/CreateAdmService';

const admsRouter = Router();

admsRouter.post('/', async (request, response) => {
    try {
        const { loginAdm, senhaAdm } = request.body;

        const createAdm = new CreateAdmService();

        const adm = await createAdm.execute({
            loginAdm,
            senhaAdm,
        });

        return response.json(adm);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

admsRouter.get('/', async (request, response) => {
    response.json(await getRepository(Administrador).find());
});

export default admsRouter;
