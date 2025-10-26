import { AbstractEntity } from "./AbstractEntity";
import { Stack } from "./enum/Stack";
import { StatusQuestion } from "./enum/StatusQuestion";

export class Questions extends AbstractEntity {
    stack?: Stack;
    descricao?: string;
    // categoria?: Categoria;
    categoria?: string;
    statusQuestion?: StatusQuestion;
    id_usuario?: string;
    titulo?: string;
}
