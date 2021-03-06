import { getRepository } from 'typeorm';

import { hash } from 'bcryptjs';

import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';
import AppError from '@shared/errors/AppError';

interface Request {
    dataNasc: string;
    defiAud: boolean;
    nomeUsu: string;
    cidadeUsu: string;
    emailUsu: string;
    senhaUsu: string;
}

class CreateUserService {
    public async execute({
        dataNasc,
        defiAud,
        nomeUsu,
        cidadeUsu,
        emailUsu,
        senhaUsu,
    }: Request): Promise<Usuario> {
        const usuariosRepository = getRepository(Usuario);

        const checkEmailExists = await usuariosRepository.findOne({
            where: { emailUsu },
        });

        if (checkEmailExists) {
            throw new AppError('Esse Email já está em uso.');
        }

        const hashedPassword = await hash(senhaUsu, 8);

        const usuario = usuariosRepository.create({
            dataNasc,
            defiAud,
            nomeUsu,
            cidadeUsu,
            emailUsu,
            senhaUsu: hashedPassword,
        });

        await usuariosRepository.save(usuario);

        return usuario;
    }
}

export default CreateUserService;
