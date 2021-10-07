import { Router } from 'express';

import usuariosRouter from '@modules/usuarios/infra/http/routes/usuario.routes';
import admsRouter from '@modules/adms/infra/http/routes/administrador.routes';
import favoritosRouter from '@modules/usuarios/infra/http/routes/favorito.routes';
import sessionsRouter from '@modules/usuarios/infra/http/routes/sessions.routes';
import sessionsAdm from '@modules/adms/infra/http/routes/sessionsAdm.routes';
import fichasRouter from '@modules/fichas/infra/http/routes/ficha.routes';
import comentsRouter from '@modules/fichas/infra/http/routes/comentario.routes';

const routes = Router();

routes.use('/users', usuariosRouter);
routes.use('/adms', admsRouter);
routes.use('/favorits', favoritosRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/sessions-adm', sessionsAdm);
routes.use('/fichas', fichasRouter);
routes.use('/coments', comentsRouter);

export default routes;
