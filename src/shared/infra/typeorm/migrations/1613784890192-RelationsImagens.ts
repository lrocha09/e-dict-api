import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class RelationsImagens1613784890192
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('categorias', 'idFicha');

        await queryRunner.addColumn(
            'categorias',
            new TableColumn({
                name: 'idFichaRef',
                type: 'uuid',
                isNullable: false,
            }),
        );

        await queryRunner.createForeignKey(
            'categorias',
            new TableForeignKey({
                name: 'CategoriaFicha',
                columnNames: ['idFichaRef'],
                referencedColumnNames: ['idFicha'],
                referencedTableName: 'fichas',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('categorias', 'CategoriaFicha');

        await queryRunner.dropColumn('categorias', 'idFichaRef');

        await queryRunner.addColumn(
            'categorias',
            new TableColumn({
                name: 'idFicha',
                type: 'uuid',
            }),
        );
    }
}
