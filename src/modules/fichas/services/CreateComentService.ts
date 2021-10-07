import { getRepository } from 'typeorm';

import Ficha from '@modules/fichas/infra/typeorm/entities/Ficha';
import AppError from '@shared/errors/AppError';
import Comentario from '@modules/fichas/infra/typeorm/entities/Comentario';
import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';

interface Request {
    idUsuRef: string;
    idFichaRef: string;
    txtComent: string;
}

class CreateComentService {
    public async execute({
        idUsuRef,
        idFichaRef,
        txtComent,
    }: Request): Promise<Comentario> {
        const comentsRepository = getRepository(Comentario);
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

        const cometario = comentsRepository.create({
            idUsuRef,
            idFichaRef,
            txtComent,
        });

        await comentsRepository.save(cometario);

        return cometario;
    }
}

export default CreateComentService;
