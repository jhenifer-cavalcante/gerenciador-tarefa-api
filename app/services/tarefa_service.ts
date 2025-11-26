import Tarefa from "#models/tarefa";
import { Nivel } from "../../contracts/enum/nivel.js";
import { TarefaInterface } from "../interfaces/tarefa.js";

export default class TarefaService {
    public async create (tarefa: TarefaInterface, username: number) : Promise<number>{
        try {
            const taf = await Tarefa.create({...tarefa,
                nivel_energia_fisica: Nivel[tarefa.nivel_energia_fisica],
                nivel_energia_mental: Nivel[tarefa.nivel_energia_mental],
                criado_por: username});
            return taf.numero;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }
}