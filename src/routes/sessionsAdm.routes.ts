import { Router } from 'express';

import AuthenticateAdmService from '../services/AuthenticateAdmService';

const sessionsAdmRouter = Router();

sessionsAdmRouter.post('/', async (request, response) => {
    try {
        const { login, senha } = request.body;

        const AuthenticateAdm = new AuthenticateAdmService();

        const { adm, token } = await AuthenticateAdm.execute({
            login,
            senha,
        });

        return response.json({ adm, token });
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default sessionsAdmRouter;
