import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateComents1630854812635 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'comentarios',
                columns: [
                    {
                        name: 'idComent',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'idUsu',
                        type: 'uuid',
                    },
                    {
                        name: 'idFicha',
                        type: 'uuid',
                    },
                    {
                        name: 'dataComent',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'statusComent',
                        type: 'boolean',
                        default: true,
                    },
                    {
                        name: 'txtComent',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comentarios');
    }
}
