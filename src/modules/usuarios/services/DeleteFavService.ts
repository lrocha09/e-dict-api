import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Favorito from '@modules/usuarios/infra/typeorm/entities/Favorito';

interface Request {
    idFav: string;
}

interface Response {
    favorito: Favorito;
}

class DeleteFavService {
    public async execute({ idFav }: Request): Promise<Response> {
        const favoritosRepository = getRepository(Favorito);

        const favorito = await favoritosRepository.findOne({
            where: {
                idFav,
            },
        });

        if (!favorito) {
            throw new AppError('Favorito inexistente.');
        }

        await favoritosRepository.remove(favorito);

        return { favorito };
    }
}

export default DeleteFavService;
