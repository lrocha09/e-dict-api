import { getRepository } from 'typeorm';

import Imagem from '../models/ImagemFicha';

interface Request {
    idFichaRef: string; // ID DA FICHA
    imgFicha: string; // IMAGEM
}

class CreateImgFichaService {
    public async execute({ idFichaRef, imgFicha }: Request): Promise<Imagem> {
        const fichasRepository = getRepository(Imagem);

        const imagens = fichasRepository.create({
            idFichaRef,
            imgFicha,
        });

        await fichasRepository.save(imagens);

        return imagens;
    }
}

export default CreateImgFichaService;
