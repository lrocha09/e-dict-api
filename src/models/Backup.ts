import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.

@Entity('backups') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class Backup {
    @PrimaryGeneratedColumn('uuid')
    idBackup: string; // ID ÚNICO

    @CreateDateColumn()
    dataBackup: Date; // DATA DE CRIAÇÃO

    @Column()
    nomeBackup: string; // NOME BACKUP

    @Column()
    descricao: string; // DESCRIÇÃO
}

export default Backup;
