import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class RelationsCategorias1613784907879
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('imagens', 'idFicha');

        await queryRunner.addColumn(
            'imagens',
            new TableColumn({
                name: 'idFichaRef',
                type: 'uuid',
                isNullable: false,
            }),
        );

        await queryRunner.createForeignKey(
            'imagens',
            new TableForeignKey({
                name: 'ImagemFicha',
                columnNames: ['idFichaRef'],
                referencedColumnNames: ['idFicha'],
                referencedTableName: 'fichas',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('imagens', 'ImagemFicha');

        await queryRunner.dropColumn('imagens', 'idFichaRef');

        await queryRunner.addColumn(
            'imagens',
            new TableColumn({
                name: 'idFicha',
                type: 'uuid',
            }),
        );
    }
}
