import SubTarefa from "#models/sub_tarefa";
import { SubTarefaInterface } from "../interfaces/subTarefa.js";

export default class SubTarefaService{
    public async update (id: number, info: SubTarefaInterface, username: number) : Promise<void>{
        try {
            const sub = await SubTarefa.query().where('numero', id);
            sub[0].merge({...info, atualizado_por: username});

            await sub[0].save();
        } catch (error) {
            console.log(error);
        }
    }

    public async show (id: number) : Promise<SubTarefa[]>{
        try {
            const subs = await SubTarefa.query()
            .where('numero', id).andWhere('ativo', true).orderBy('ordem');

            return subs;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}