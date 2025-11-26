import { Frequencia } from "../../contracts/enum/frequencia.js";
import { Nivel } from "../../contracts/enum/nivel.js";
import { Status } from "../../contracts/enum/status.js";

export interface TarefaInterface{
    numero?: number,
    titulo?: string,
    status?: Status,
    descricao?: string,
    prazo?: string,
    frequencia?: Frequencia,
    nivel_energia_fisica: Nivel,
    nivel_energia_mental: Nivel,
    num_categoria?: number,
    num_recompensa?: number,
    criado_por?: number,
    ativo?: boolean
}