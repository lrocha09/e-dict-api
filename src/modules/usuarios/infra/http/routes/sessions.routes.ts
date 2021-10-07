import { Router } from 'express';

import AuthenticateUserService from '@modules/usuarios/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    const { email, senha } = request.body;
    const AuthenticateUser = new AuthenticateUserService();
    const { usuario, token } = await AuthenticateUser.execute({
        email,
        senha,
    });

    return response.json({ usuario, token });
});

export default sessionsRouter;
