import { getRepository } from 'typeorm';
import Ficha from '@modules/fichas/infra/typeorm/entities/Ficha';

interface Request {
    numFicha: number;
    termoGen: string;
    toponiPt: string;
    tipoAcident: string;
    localFicha: string;
    taxmPt: string;
    origFicha: string;
    histFicha: string;
    infoEnc: string;
    taxmLib: string;
    morfoLib: string;
    contextLib: string;
    fontFicha: string;
    imgPerfil: string;
    gifFicha: string;
}

class CreateFichaService {
    public async execute({
        numFicha,
        termoGen,
        toponiPt,
        tipoAcident,
        localFicha,
        taxmPt,
        origFicha,
        histFicha,
        infoEnc,
        taxmLib,
        morfoLib,
        contextLib,
        fontFicha,
        imgPerfil,
        gifFicha,
    }: Request): Promise<Ficha> {
        const fichasRepository = getRepository(Ficha);

        const ficha = fichasRepository.create({
            numFicha,
            termoGen,
            toponiPt,
            tipoAcident,
            localFicha,
            taxmPt,
            origFicha,
            histFicha,
            infoEnc,
            taxmLib,
            morfoLib,
            contextLib,
            fontFicha,
            imgPerfil,
            gifFicha,
        });

        await fichasRepository.save(ficha);

        return ficha;
    }
}

export default CreateFichaService;
