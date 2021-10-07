import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Usuario from '@modules/usuarios/infra/typeorm/entities/Usuario';
import Ficha from './Ficha';

@Entity('comentarios')
class Comentario {
    @PrimaryGeneratedColumn('uuid')
    idComent: string;

    @Column()
    idUsuRef: string;

    @Column()
    idFichaRef: string;

    @CreateDateColumn()
    dataComent: Date;

    @Column()
    statusComent: boolean;

    @Column()
    txtComent: string;

    @ManyToOne(() => Usuario, { eager: true })
    @JoinColumn({ name: 'idUsuRef' })
    Usuario: Usuario;

    @ManyToOne(() => Ficha)
    @JoinColumn({ name: 'idFichaRef' })
    Ficha: Ficha;
}

export default Comentario;
