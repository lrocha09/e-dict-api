import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class RelationsFavorits1613232823287
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('favoritos', 'idUsu');
        await queryRunner.dropColumn('favoritos', 'idFicha');

        await queryRunner.addColumn(
            'favoritos',
            new TableColumn({
                name: 'idFichaRef',
                type: 'uuid',
                isNullable: false,
            }),
        );

        await queryRunner.addColumn(
            'favoritos',
            new TableColumn({
                name: 'idUsuRef',
                type: 'uuid',
                isNullable: false,
            }),
        );

        await queryRunner.createForeignKey(
            'favoritos',
            new TableForeignKey({
                name: 'FavoritoFicha',
                columnNames: ['idFichaRef'],
                referencedColumnNames: ['idFicha'],
                referencedTableName: 'fichas',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'favoritos',
            new TableForeignKey({
                name: 'FavoritoUsu',
                columnNames: ['idUsuRef'],
                referencedColumnNames: ['idUsu'],
                referencedTableName: 'usuarios',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('favoritos', 'FavoritoUsu');
        await queryRunner.dropForeignKey('favoritos', 'FavoritoFicha');

        await queryRunner.dropColumn('favoritos', 'idUsuRef');
        await queryRunner.dropColumn('favoritos', 'idFichaRef');

        await queryRunner.addColumn(
            'favoritos',
            new TableColumn({
                name: 'idUsu',
                type: 'uuid',
            }),
        );

        await queryRunner.addColumn(
            'favoritos',
            new TableColumn({
                name: 'idFicha',
                type: 'uuid',
            }),
        );
    }
}
