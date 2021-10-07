import { Router } from 'express';
import { getRepository } from 'typeorm';

import Administrador from '@modules/adms/infra/typeorm/entities/Administrador';
import CreateAdmService from '@modules/adms/services/CreateAdmService';

const admsRouter = Router();

admsRouter.post('/', async (request, response) => {
    const { loginAdm, senhaAdm } = request.body;
    const createAdm = new CreateAdmService();
    const adm = await createAdm.execute({
        loginAdm,
        senhaAdm,
    });

    return response.json(adm);
});

admsRouter.get('/', async (request, response) => {
    response.json(await getRepository(Administrador).find());
});

export default admsRouter;
