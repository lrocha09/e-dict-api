import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('usuarios')
class Usuario {
    @PrimaryGeneratedColumn('uuid')
    idUsu: string;

    @Column('timestamp with time zone')
    dataNasc: Date;

    @CreateDateColumn()
    dataInsc: Date;

    @UpdateDateColumn()
    dataAtt: Date;

    @Column()
    defiAud: boolean;

    @Column()
    nomeUsu: string;

    @Column()
    cidadeUsu: string;

    @Column()
    emailUsu: string;

    @Column()
    senhaUsu: string;

    @Column()
    imgPerfil: string;
}

export default Usuario;
