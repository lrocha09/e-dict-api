import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.
import Ficha from './Ficha';

@Entity('imagens') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class ImagemFicha {
    @PrimaryGeneratedColumn('uuid')
    idImg: string; // ID DA IMAGEM

    @Column()
    idFichaRef: string; // ID DA FICHA

    @CreateDateColumn()
    dataImg: Date; // DATA DE CRIAÇÃO

    @Column()
    imgFicha: string; // IMAGEM

    @ManyToOne(() => Ficha)
    @JoinColumn({ name: 'idFichaRef' })
    idFicha: Ficha;
}

export default ImagemFicha;
