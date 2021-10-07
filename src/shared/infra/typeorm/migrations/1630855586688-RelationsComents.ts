import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class RelationsComents1630855586688
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('comentarios', 'idUsu');
        await queryRunner.dropColumn('comentarios', 'idFicha');

        await queryRunner.addColumn(
            'comentarios',
            new TableColumn({
                name: 'idFichaRef',
                type: 'uuid',
                isNullable: false,
            }),
        );

        await queryRunner.addColumn(
            'comentarios',
            new TableColumn({
                name: 'idUsuRef',
                type: 'uuid',
                isNullable: false,
            }),
        );

        await queryRunner.createForeignKey(
            'comentarios',
            new TableForeignKey({
                name: 'ComentarioFicha',
                columnNames: ['idFichaRef'],
                referencedColumnNames: ['idFicha'],
                referencedTableName: 'fichas',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'comentarios',
            new TableForeignKey({
                name: 'ComentarioUsu',
                columnNames: ['idUsuRef'],
                referencedColumnNames: ['idUsu'],
                referencedTableName: 'usuarios',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('comentarios', 'ComentarioUsu');
        await queryRunner.dropForeignKey('comentarios', 'ComentarioFicha');

        await queryRunner.dropColumn('comentarios', 'idUsuRef');
        await queryRunner.dropColumn('comentarios', 'idFichaRef');

        await queryRunner.addColumn(
            'comentarios',
            new TableColumn({
                name: 'idUsu',
                type: 'uuid',
            }),
        );

        await queryRunner.addColumn(
            'comentarios',
            new TableColumn({
                name: 'idFicha',
                type: 'uuid',
            }),
        );
    }
}
