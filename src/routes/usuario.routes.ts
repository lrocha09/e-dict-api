import { Router } from 'express';
import { getRepository } from 'typeorm';

import Usuario from '../models/Usuario';
import CreateUserService from '../services/CreateUserService';

const usuariosRouter = Router();

usuariosRouter.post('/', async (request, response) => {
    try {
        const {
            dataNasc,
            defiAud,
            nomeUsu,
            cidadeUsu,
            emailUsu,
            senhaUsu,
        } = request.body;

        const createUser = new CreateUserService();

        const usuario = await createUser.execute({
            dataNasc,
            defiAud,
            nomeUsu,
            cidadeUsu,
            emailUsu,
            senhaUsu,
        });

        return response.json(usuario);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

usuariosRouter.get('/', async (request, response) => {
    response.json(await getRepository(Usuario).find());
});

export default usuariosRouter;
