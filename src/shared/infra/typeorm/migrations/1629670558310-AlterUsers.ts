import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterUsers1627166465930 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('usuarios', 'imgPerfil');

        await queryRunner.addColumn(
            'usuarios',
            new TableColumn({
                name: 'imgPerfil',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('usuarios', 'imgPerfil');

        await queryRunner.addColumn(
            'usuarios',
            new TableColumn({
                name: 'imgPerfil',
                type: 'varchar',
                isNullable: false,
            }),
        );
    }
}
