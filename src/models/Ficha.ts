import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'; // Entidade, model a ser salva no banco de dados.

@Entity('fichas') // Indica que toda vez que for salvo a entidade irá ser armazenada no banco de dados.
class Ficha {
    @PrimaryGeneratedColumn('uuid')
    idFicha: string; // ID ÚNICO

    @CreateDateColumn()
    dataFicha: Date; // DATA DE CRIAÇÃO

    @UpdateDateColumn()
    dataAtt: Date; // DATA DE ATUALIZAÇÃO

    @Column()
    numFicha: number; // NÚMERO DA FICHA

    @Column()
    termoGen: string; // TERMO GENÉRICO

    @Column()
    toponiPt: string; // TOPÔNIMO EM LP

    @Column()
    tipoAcident: string; // TIPO DE ACIDENTE

    @Column()
    localFicha: string; // LOCALIZAÇÃO

    @Column()
    taxmPt: string; // TAXONOMIA DO TOPÔNIMO EM LP

    @Column()
    origFicha: string; // ORIGEM

    @Column()
    histFicha: string; // HISTÓRICO

    @Column()
    infoEnc: string; // INFORMAÇÕES ENCICLOPÉDICAS

    @Column()
    taxmLib: string; // TAXONOMIA DO TOPÔNIMO EM LIBRAS

    @Column()
    morfoLib: string; // ESTRUTURA MORFOLÓGICA DO SINAL TOPONÍMICO

    @Column()
    contextLib: string; // CONTEXTO DO SINAL

    @Column()
    fontFicha: string; // FONTES

    @Column()
    imgPerfil: string; // IMAGEM DO PERFIL

    @Column()
    gifFicha: string; // GIF COM O SINAL
}

export default Ficha;
