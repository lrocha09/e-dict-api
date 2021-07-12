import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateImagensFicha1613616408116
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'imagens',
                columns: [
                    {
                        name: 'idImg',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'idFicha',
                        type: 'uuid',
                    },
                    {
                        name: 'dataImg',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'imgFicha',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imagens');
    }
}
