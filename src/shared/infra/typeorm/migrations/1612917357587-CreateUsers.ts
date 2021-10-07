import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1612917357587 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'idUsu',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'dataNasc',
                        type: 'timestamp with time zone',
                    },
                    {
                        name: 'dataInsc',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'dataAtt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'defiAud',
                        type: 'boolean',
                    },
                    {
                        name: 'nomeUsu',
                        type: 'varchar',
                    },
                    {
                        name: 'cidadeUsu',
                        type: 'varchar',
                    },
                    {
                        name: 'emailUsu',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'senhaUsu',
                        type: 'varchar',
                    },
                    {
                        name: 'imgPerfil',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }
}
