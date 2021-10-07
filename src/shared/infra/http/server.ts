import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import uploadConfig from '@config/uploadConfig';
import routes from './routes';
import '@shared/infra/typeorm';
import handleErrors from './middlewares/handleErrors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig('arquivosFicha').directory));
app.use(
    '/files/img-perfil',
    express.static(uploadConfig('imgsPerfil').directory),
);
app.use(
    '/files/img-ficha',
    express.static(uploadConfig('imgsFicha').directory),
);

app.use(routes);
app.use(handleErrors);

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333!');
});
