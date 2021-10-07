import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCategorias1613616341989
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categorias',
                columns: [
                    {
                        name: 'idTag',
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
                        name: 'tag',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categorias');
    }
}
