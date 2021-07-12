import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Administrador from '../models/Administrador';

interface Request {
    loginAdm: string;
    senhaAdm: string;
}

class CreateAdmService {
    public async execute({
        loginAdm,
        senhaAdm,
    }: Request): Promise<Administrador> {
        const admsRepository = getRepository(Administrador);

        const checkLoginExists = await admsRepository.findOne({
            where: { loginAdm },
        });

        if (checkLoginExists) {
            throw new Error('Esse Login já está em uso.');
        }

        const hashedPassword = await hash(senhaAdm, 8);

        const administrador = admsRepository.create({
            loginAdm,
            senhaAdm: hashedPassword,
        });

        await admsRepository.save(administrador);

        return administrador;
    }
}

export default CreateAdmService;
