import { AbstractEntity } from "./AbastractEntity";
import { Categoria } from "./enum/Categoria";
import { StatusPost } from "./enum/StatusPost";
import { Tipo } from "./enum/Tipo";

export class Post extends AbstractEntity{

    categoria!: Categoria
    descricao!: string
    statusPost!: StatusPost
    tipo!: Tipo
    id_usuario!: string
}