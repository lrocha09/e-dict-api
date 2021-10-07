import { getRepository } from 'typeorm';
import Imagem from '@modules/fichas/infra/typeorm/entities/ImagemFicha';

interface Request {
    idFichaRef: string;
    imgFicha: string;
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
