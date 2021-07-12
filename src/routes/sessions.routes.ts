import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, senha } = request.body;

        const AuthenticateUser = new AuthenticateUserService();

        const { usuario, token } = await AuthenticateUser.execute({
            email,
            senha,
        });

        return response.json({ usuario, token });
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default sessionsRouter;
