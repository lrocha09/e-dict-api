import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.

@Entity('administradores') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class Administrador {
    @PrimaryGeneratedColumn('uuid')
    idAdm: string; // ID ÚNICO

    @CreateDateColumn()
    dataInsc: Date; // DATA DE INSCRIÇÃO

    @UpdateDateColumn()
    dataAtt: Date; // DATA DE ATUALIZAÇÃO

    @Column()
    loginAdm: string; // LOGIN

    @Column()
    senhaAdm: string; // SENHA
}

export default Administrador;
