import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.

@Entity('perfilsUsu') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class PerfilUsu {
    @PrimaryGeneratedColumn('uuid')
    idImg: string; // ID DA IMAGEM

    @Column()
    idUsuRef: string; // ID DO USUÁRIO

    @CreateDateColumn()
    dataPerfil: Date; // DATA DE CRIAÇÃO

    @Column()
    imgPerfil: string; // IMAGEM
}

export default PerfilUsu;
