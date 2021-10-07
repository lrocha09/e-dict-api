import { Router } from 'express';
import { getRepository } from 'typeorm';

import Comentario from '@modules/fichas/infra/typeorm/entities/Comentario';
import CreateComentService from '@modules/fichas/services/CreateComentService';
import DeleteComentService from '@modules/fichas/services/DeleteComentService';

const ComentsRouter = Router();

ComentsRouter.post('/', async (request, response) => {
    const { idUsuRef, idFichaRef, txtComent } = request.body;
    const createComent = new CreateComentService();
    const comentario = await createComent.execute({
        idUsuRef,
        idFichaRef,
        txtComent,
    });

    return response.json(comentario);
});

ComentsRouter.delete('/delete/:idComent', async (request, response) => {
    const { idComent } = request.params;
    const deleteComent = new DeleteComentService();
    const comentario = await deleteComent.execute({
        idComent,
    });

    return response.json(comentario);
});

ComentsRouter.get('/:idFicha', async (request, response) => {
    const { idFicha } = request.params;

    response.json(
        await getRepository(Comentario).find({
            where: {
                idFichaRef: idFicha,
            },
        }),
    );
});

ComentsRouter.get('/', async (request, response) => {
    response.json(await getRepository(Comentario).find());
});

export default ComentsRouter;
