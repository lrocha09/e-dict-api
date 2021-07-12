import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateFichas1612917408813 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'fichas',
                columns: [
                    {
                        name: 'idFicha',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'dataFicha',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'dataAtt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'numFicha',
                        type: 'integer',
                    },
                    {
                        name: 'termoGen',
                        type: 'varchar',
                    },
                    {
                        name: 'toponiPt',
                        type: 'varchar',
                    },
                    {
                        name: 'tipoAcident',
                        type: 'varchar',
                    },
                    {
                        name: 'localFicha',
                        type: 'varchar',
                    },
                    {
                        name: 'taxmPt',
                        type: 'varchar',
                    },
                    {
                        name: 'origFicha',
                        type: 'varchar',
                    },
                    {
                        name: 'histFicha',
                        type: 'varchar',
                    },
                    {
                        name: 'infoEnc',
                        type: 'varchar',
                    },
                    {
                        name: 'taxmLib',
                        type: 'varchar',
                    },
                    {
                        name: 'morfoLib',
                        type: 'varchar',
                    },
                    {
                        name: 'contextLib',
                        type: 'varchar',
                    },
                    {
                        name: 'fontFicha',
                        type: 'varchar',
                    },
                    {
                        name: 'imgPerfil',
                        type: 'varchar',
                    },
                    {
                        name: 'gifFicha',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('fichas');
    }
}
