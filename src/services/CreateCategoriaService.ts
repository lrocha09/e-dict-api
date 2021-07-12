import { getRepository } from 'typeorm';

import Categoria from '../models/Categoria';

interface Request {
    idFichaRef: string; // ID DA FICHA
    tag: string; // TAG
}

class CreateCategoriaService {
    public async execute({ idFichaRef, tag }: Request): Promise<Categoria> {
        const fichasRepository = getRepository(Categoria);

        const categoria = fichasRepository.create({
            idFichaRef,
            tag,
        });

        await fichasRepository.save(categoria);

        return categoria;
    }
}

export default CreateCategoriaService;
