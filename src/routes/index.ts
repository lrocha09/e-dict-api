import { Router } from 'express';

import usuariosRouter from './usuario.routes';
import admsRouter from './administrador.routes';
import favoritosRouter from './favorito.routes';
import sessionsRouter from './sessions.routes';
import sessionsAdm from './sessionsAdm.routes';
import fichasRouter from './ficha.routes';

const routes = Router();

routes.use('/users', usuariosRouter);
routes.use('/adms', admsRouter);
routes.use('/favorits', favoritosRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/sessions-adm', sessionsAdm);
routes.use('/fichas', fichasRouter);

export default routes;
