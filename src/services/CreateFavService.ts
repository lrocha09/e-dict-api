import { getRepository } from 'typeorm';

import Favorito from '../models/Favorito';
import Usuario from '../models/Usuario';
import Ficha from '../models/Ficha';

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
            where: { idUsuRef },
        });

        const ficha = await fichaRepository.findOne({
            where: { idFichaRef },
        });

        if (!usuario || !ficha) {
            throw new Error('ID do Usuário ou Ficha inexistente.');
        }

        const checkFavExists = await favsRepository.findOne({
            where: { idUsuRef, idFichaRef },
        });

        if (checkFavExists) {
            throw new Error('Favorito já existe.');
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
