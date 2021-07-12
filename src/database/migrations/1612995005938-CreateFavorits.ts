import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateFavorits1612995005938 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'favoritos',
                columns: [
                    {
                        name: 'idFav',
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
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('favoritos');
    }
}
