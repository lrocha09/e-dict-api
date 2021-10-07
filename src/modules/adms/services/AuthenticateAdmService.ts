import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Administrador from '@modules/adms/infra/typeorm/entities/Administrador';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface Request {
    login: string;
    senha: string;
}

interface Response {
    adm: Administrador;
    token: string;
}

class AuthenticateAdmService {
    public async execute({ login, senha }: Request): Promise<Response> {
        const usuariosRepository = getRepository(Administrador);

        const adm = await usuariosRepository.findOne({
            where: { loginAdm: login },
        });

        if (!adm) {
            throw new AppError('Email e/ou senha incorreta!', 401);
        }

        const passwordMatched = await compare(senha, adm.senhaAdm);

        if (!passwordMatched) {
            throw new AppError('Email e/ou senha incorreta!', 401);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: adm.idAdm,
            expiresIn,
        });

        return {
            adm,
            token,
        };
    }
}

export default AuthenticateAdmService;
