import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.

@Entity('logs') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class Log {
    @PrimaryGeneratedColumn('uuid')
    idLog: string; // ID DO LOG

    @Column()
    idRef: string; // ID DO USUÁRIO

    @CreateDateColumn()
    dataLog: Date; // DATA DO LOG

    @Column()
    tipoLog: string; // TIPO LOGO (USU OU ADM)

    @Column()
    txtLog: string; // TEXTO DO LOG
}

export default Log;
