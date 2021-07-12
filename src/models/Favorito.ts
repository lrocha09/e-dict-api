import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.
import Ficha from './Ficha';
import Usuario from './Usuario';

@Entity('favoritos') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class Favorito {
    @PrimaryGeneratedColumn('uuid')
    idFav: string; // ID DO FAVORITO

    @Column()
    idUsuRef: string; // ID DO USUÁRIO

    @Column()
    idFichaRef: string; // ID DA FICHA

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'idUsuRef' })
    idUsu: Usuario;

    @ManyToOne(() => Ficha)
    @JoinColumn({ name: 'idFichaRef' })
    idFicha: Ficha;
}

export default Favorito;
