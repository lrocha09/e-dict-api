import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
} from 'typeorm';

import Ficha from '@modules/fichas/infra/typeorm/entities/Ficha';
import Usuario from './Usuario';

@Entity('favoritos')
class Favorito {
    @PrimaryGeneratedColumn('uuid')
    idFav: string;

    @Column()
    idUsuRef: string;

    @Column()
    idFichaRef: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'idUsuRef' })
    Usuario: Usuario;

    @ManyToOne(() => Ficha)
    @JoinColumn({ name: 'idFichaRef' })
    Ficha: Ficha;
}

export default Favorito;
