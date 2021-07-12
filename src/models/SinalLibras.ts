import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.

@Entity('sinaisLibras') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class SinailLibras {
    @PrimaryGeneratedColumn('uuid')
    idSinal: string; // ID DO SINAL

    @Column()
    idFichaRef: string; // ID DA FICHA

    @CreateDateColumn()
    dataSinal: Date; // DATA DE CRIAÇÃO

    @Column()
    gifSinal: string; // SINAL EM GIF
}

export default SinailLibras;
