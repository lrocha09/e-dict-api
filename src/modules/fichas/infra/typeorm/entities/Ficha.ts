import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('fichas')
class Ficha {
    @PrimaryGeneratedColumn('uuid')
    idFicha: string;

    @CreateDateColumn()
    dataFicha: Date;

    @UpdateDateColumn()
    dataAtt: Date;

    @Column()
    numFicha: number;

    @Column()
    termoGen: string;

    @Column()
    toponiPt: string;

    @Column()
    tipoAcident: string;

    @Column()
    localFicha: string;

    @Column()
    taxmPt: string;

    @Column()
    origFicha: string;

    @Column()
    histFicha: string;

    @Column()
    infoEnc: string;

    @Column()
    taxmLib: string;

    @Column()
    morfoLib: string;

    @Column()
    contextLib: string;

    @Column()
    fontFicha: string;

    @Column()
    imgPerfil: string;

    @Column()
    gifFicha: string;
}

export default Ficha;
