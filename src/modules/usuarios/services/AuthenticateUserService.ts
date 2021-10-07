import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface Request {
    email: string;
    senha: string;
}

interface Response {
    usuario: Usuario;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, senha }: Request): Promise<Response> {
        const usuariosRepository = getRepository(Usuario);

        const usuario = await usuariosRepository.findOne({
            where: { emailUsu: email },
        });

        if (!usuario) {
            throw new AppError('Email e/ou senha incorreta!', 401);
        }

        const passwordMatched = await compare(senha, usuario.senhaUsu);

        if (!passwordMatched) {
            throw new AppError('Email e/ou senha incorreta!', 401);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: usuario.idUsu,
            expiresIn,
        });

        return {
            usuario,
            token,
        };
    }
}

export default AuthenticateUserService;
