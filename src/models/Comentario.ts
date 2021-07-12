import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.

@Entity('comentarios') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class Comentario {
    @PrimaryGeneratedColumn('uuid')
    idComent: string; // ID DO COMENTÁRIO

    @Column()
    idUsuRef: string; // ID DO USUÁRIO

    @Column()
    idFichaRef: string; // ID DA FICHA

    @CreateDateColumn()
    dataComent: Date; // DATA DO COMENTÁRIO

    @Column()
    statusComent: boolean; // STATUS COMENTÁRIO

    @Column()
    txtComent: string; // TEXTO DO COMENTÁRIO
}

export default Comentario;
