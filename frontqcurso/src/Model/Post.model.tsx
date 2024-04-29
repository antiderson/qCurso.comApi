import { AbstractEntity } from "./AbstractEntity";
import { Categoria } from "./enum/Stack";
import { StatusPost } from "./enum/StatusPost";
import { Tipo } from "./enum/Tipo";

export class Post extends AbstractEntity {

    categoria!: Categoria
    descricao!: string
    statusPost!: StatusPost
    tipo!: Tipo
    id_usuario!: string
}