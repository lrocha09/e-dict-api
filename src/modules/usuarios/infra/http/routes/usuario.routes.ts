import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';

import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import uploadConfig from '@config/uploadConfig';
import CreateUserService from '@modules/usuarios/services/CreateUserService';
import UpdateUserPerfilService from '@modules/usuarios/services/UpdateUserPerfilService';

const usuariosRouter = Router();
const imgsPerfil = multer(uploadConfig('imgsPerfil'));

usuariosRouter.post('/', async (request, response) => {
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
});

usuariosRouter.patch(
    '/img-perfil',
    ensureAuthenticated,
    imgsPerfil.single('file'),
    async (request, response) => {
        const { idUsu } = request.user;
        const UpdateUser = new UpdateUserPerfilService();
        const usuario = await UpdateUser.execute({
            idUsu,
            imgPerfil: request.file.filename,
        });

        return response.json(usuario);
    },
);

usuariosRouter.get('/', async (request, response) => {
    response.json(await getRepository(Usuario).find());
});

export default usuariosRouter;
