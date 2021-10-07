import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Favorito from '@modules/usuarios/infra/typeorm/entities/Favorito';
import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';
import Ficha from '@modules/fichas/infra/typeorm/entities/Ficha';

interface Request {
    idUsuRef: string;
    idFichaRef: string;
}

class CreateFavService {
    public async execute({ idUsuRef, idFichaRef }: Request): Promise<Favorito> {
        const favsRepository = getRepository(Favorito);
        const usuarioRepository = getRepository(Usuario);
        const fichaRepository = getRepository(Ficha);

        const usuario = await usuarioRepository.findOne({
            where: { idUsu: idUsuRef },
        });

        const ficha = await fichaRepository.findOne({
            where: { idFicha: idFichaRef },
        });

        if (!usuario || !ficha) {
            throw new AppError('ID do Usuário ou Ficha inexistente.');
        }

        const checkFavExists = await favsRepository.findOne({
            where: { idUsuRef, idFichaRef },
        });

        if (checkFavExists) {
            throw new AppError('Favorito já existe.', 404);
        }

        const favorito = favsRepository.create({
            idUsuRef,
            idFichaRef,
        });

        await favsRepository.save(favorito);

        return favorito;
    }
}

export default CreateFavService;
