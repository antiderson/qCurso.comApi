import { AbstractEntity } from "./AbstractEntity";
import { Stack } from "./enum/Stack";
import { StatusPost } from "./enum/StatusPost";
import { Categoria } from "./enum/Categoria";

export class Post extends AbstractEntity {
    stack?: Stack;
    descricao?: string;
    // categoria?: Categoria;
    categoria?: string;
    tags?: string[];
    statusPost?: StatusPost;
    id_usuario?: string;
    titulo?: string;
}
