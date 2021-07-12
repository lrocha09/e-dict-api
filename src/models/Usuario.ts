import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.

@Entity('usuarios') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class Usuario {
    @PrimaryGeneratedColumn('uuid')
    idUsu: string; // ID ÚNICO

    @Column('timestamp with time zone')
    dataNasc: Date; // DATA DE NASCIMENTO

    @CreateDateColumn()
    dataInsc: Date; // DATA DE INSCRIÇÃO

    @UpdateDateColumn()
    dataAtt: Date; // DATA DE ATUALIZAÇÃO

    @Column()
    defiAud: boolean; // DEFIÊNCIA AUDITIVA

    @Column()
    nomeUsu: string; // NOME

    @Column()
    cidadeUsu: string; // CIDADE

    @Column()
    emailUsu: string; // EMAIL

    @Column()
    senhaUsu: string; // SENHA

    @Column()
    imgPerfil: string; // IMAGEM DO PERFIL
}

export default Usuario;
