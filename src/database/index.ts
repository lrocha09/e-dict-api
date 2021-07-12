import { createConnection } from 'typeorm';

/**
 * Arquivo responsável por fazer conexão da aplicação com o banco de dados, a função "createConnection()"
 * porcura o arquivo "ormconfig.json" na intenção de importar todas as configurações do banco de dados
 * e criar a conexão.
 *
 * As configurações definidas no arquivo poderia ser criada no próprio "createConnection({"type": "postgres",
 * "host": "localhost",})" porém o typeORM em suas operações de migrate, create entity e etc, necessita por
 * padrão do arquivo "ormconfig.json" e suas definições, logo não tem necessidade de fazer a definição pela função.
 */
createConnection();
