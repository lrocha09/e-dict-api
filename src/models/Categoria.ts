import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.
import Ficha from './Ficha';

@Entity('categorias') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class Categoria {
    @PrimaryGeneratedColumn('uuid')
    idTag: string; // ID DA CATEGORIA

    @Column()
    idFichaRef: string; // ID DA FICHA

    @Column()
    tag: string; // TAG

    @ManyToMany(() => Ficha)
    @JoinColumn({ name: 'idFichaRef' })
    idFicha: Ficha;
}

export default Categoria;
