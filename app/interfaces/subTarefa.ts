import { Frequencia } from "../../contracts/enum/frequencia.js";
import { Nivel } from "../../contracts/enum/nivel.js";
import { Status } from "../../contracts/enum/status.js";

export interface SubTarefaInterface{
    numero?: number,
    titulo?: string,
    ordem?: number,
    status?: Status,
    descricao?: string,
    frequencia?: Frequencia,
    nivel_energia_fisica?: Nivel,
    nivel_energia_mental?: Nivel,
    num_motivacao?: number,
    num_tarefa?: number,
    criado_por?: number,
    ativo?: boolean
}