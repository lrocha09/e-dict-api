import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAdms1612917383546 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'administradores',
                columns: [
                    {
                        name: 'idAdm',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'dataInsc',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'dataAtt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'loginAdm',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'senhaAdm',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('administradores');
    }
}
