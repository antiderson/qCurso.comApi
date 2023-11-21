import { AbstractEntity } from "./AbstractEntity";
import { Genero } from "./enum/Genero";

export class Usuario extends AbstractEntity {

    login!: string
    senha!: string
    nome!: string
    portifolio!: string
    redeSocial!: string
    email!: string
    dataNascimento!: Date
    genero!: Genero
    // posts!: Post[]
}