import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('administradores')
class Administrador {
    @PrimaryGeneratedColumn('uuid')
    idAdm: string;

    @CreateDateColumn()
    dataInsc: Date;

    @UpdateDateColumn()
    dataAtt: Date;

    @Column()
    loginAdm: string;

    @Column()
    senhaAdm: string;
}

export default Administrador;
