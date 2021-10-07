import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';
import uploadConfig from '@config/uploadConfig';
import AppError from '@shared/errors/AppError';

interface Request {
    idUsu: string;
    imgPerfil: string;
}

class UpdateUserPerfilService {
    public async execute({ imgPerfil, idUsu }: Request): Promise<Usuario> {
        const usuariosRepository = getRepository(Usuario);
        const usuario = await usuariosRepository.findOne(idUsu);

        if (!usuario) {
            throw new AppError('Usuário não autenticado!', 401);
        }
        if (usuario.imgPerfil) {
            const imgPerfilPath = path.join(
                uploadConfig('imgsPerfil').directory,
                usuario.imgPerfil,
            );
            const imgPerfilExists = await fs.promises.stat(imgPerfilPath);

            if (imgPerfilExists) {
                await fs.promises.unlink(imgPerfilPath);
            }
        }

        usuario.imgPerfil = imgPerfil;
        await usuariosRepository.save(usuario);

        return usuario;
    }
}

export default UpdateUserPerfilService;
