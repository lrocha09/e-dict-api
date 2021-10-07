import { getRepository } from 'typeorm';

import Comentario from '@modules/fichas/infra/typeorm/entities/Comentario';
import AppError from '@shared/errors/AppError';

interface Request {
    idComent: string;
}

interface Response {
    comentario: Comentario;
}

class DeleteComentService {
    public async execute({ idComent }: Request): Promise<Response> {
        const comentsRepository = getRepository(Comentario);

        const comentario = await comentsRepository.findOne({
            where: {
                idComent,
            },
        });

        if (!comentario) {
            throw new AppError('Comentário inexistente.');
        }

        await comentsRepository.remove(comentario);

        return { comentario };
    }
}

export default DeleteComentService;
