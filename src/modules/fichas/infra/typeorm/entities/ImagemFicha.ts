import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Ficha from './Ficha';

@Entity('imagens')
class ImagemFicha {
    @PrimaryGeneratedColumn('uuid')
    idImg: string;

    @Column()
    idFichaRef: string;

    @CreateDateColumn()
    dataImg: Date;

    @Column()
    imgFicha: string;

    @ManyToOne(() => Ficha)
    @JoinColumn({ name: 'idFichaRef' })
    Ficha: Ficha;
}

export default ImagemFicha;
