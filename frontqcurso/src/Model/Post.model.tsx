import { AbstractEntity } from "./AbstractEntity";
import { Stack } from "./enum/Stack";
import { StatusPost } from "./enum/StatusPost";
import { Categoria } from "./enum/Categoria";

export class Post extends AbstractEntity {
    stack?: Stack;
    descricao?: string;
    statusPost?: StatusPost;
    categoria?: Categoria;
    id_usuario?: string;
    titulo?: string;
}
