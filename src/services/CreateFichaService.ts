import { getRepository } from 'typeorm';

import Ficha from '../models/Ficha';

interface Request {
    numFicha: number; // NÚMERO DA FICHA
    termoGen: string; // TERMO GENÉRICO
    toponiPt: string; // TOPÔNIMO EM LP
    tipoAcident: string; // TIPO DE ACIDENTE
    localFicha: string; // LOCALIZAÇÃO
    taxmPt: string; // TAXONOMIA DO TOPÔNIMO EM LP
    origFicha: string; // ORIGEM
    histFicha: string; // HISTÓRICO
    infoEnc: string; // INFORMAÇÕES ENCICLOPÉDICAS
    taxmLib: string; // TAXONOMIA DO TOPÔNIMO EM LIBRAS
    morfoLib: string; // ESTRUTURA MORFOLÓGICA DO SINAL TOPONÍMICO
    contextLib: string; // CONTEXTO DO SINAL
    fontFicha: string; // FONTES
    imgPerfil: string; // IMAGEM DO PERFIL
    gifFicha: string; // GIF COM O SINAL
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
