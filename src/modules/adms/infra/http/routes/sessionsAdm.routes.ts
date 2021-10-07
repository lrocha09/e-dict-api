import { Router } from 'express';

import AuthenticateAdmService from '@modules/adms/services/AuthenticateAdmService';

const sessionsAdmRouter = Router();

sessionsAdmRouter.post('/', async (request, response) => {
    const { login, senha } = request.body;
    const AuthenticateAdm = new AuthenticateAdmService();
    const { adm, token } = await AuthenticateAdm.execute({
        login,
        senha,
    });

    return response.json({ adm, token });
});

export default sessionsAdmRouter;
