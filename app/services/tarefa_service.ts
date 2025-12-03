import Tarefa from "#models/tarefa";
import { Frequencia } from "../../contracts/enum/frequencia.js";
import { TarefaInterface } from "../interfaces/tarefa.js";

export default class TarefaService {
    public async create (tarefa: TarefaInterface, username: number) : Promise<number>{
        try {
            console.log(tarefa)
            const taf = await Tarefa.create({...tarefa,
                nivel_energia_fisica: tarefa.nivel_energia_fisica? tarefa.nivel_energia_fisica : 1,
                nivel_energia_mental: tarefa.nivel_energia_mental? tarefa.nivel_energia_mental : 1,
                criado_por: username});
            return taf.numero;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }

    public async update (id: number, tarefaInfo: TarefaInterface, username: number) : Promise<void>{
        try {
            const tarefa = await Tarefa.query().where('numero', id);
            tarefa[0].merge({...tarefaInfo, 
                nivel_energia_fisica: tarefaInfo.nivel_energia_fisica? tarefaInfo.nivel_energia_fisica : 1,
                nivel_energia_mental: tarefaInfo.nivel_energia_mental? tarefaInfo.nivel_energia_mental : 1,
                atualizado_por: username});

            await tarefa[0].save();
        } catch (error) {
            console.log(error);
        }
    }

    public async show (id: number) : Promise<Tarefa | undefined>{
        try {
            const tarefa = await Tarefa.query()
            .preload('sub_tarefas')
            .where('numero', id);

            return tarefa[0];
        } catch (error) {
            console.log(error);
            return;
        }
    }

    public async index (params: TarefaInterface) : Promise<Tarefa[]>{
        const {titulo, status, num_categoria} = params;
        try {
            let tarefas = await Tarefa.query()
            .where((query)=>{
                if(titulo)
                    query.whereILike('titulo', `'%${titulo}%'`);

                if(status)
                    query.where('status', status)

                if(num_categoria)
                    query.where('id_categoria', num_categoria)

                query.where('ativo', true)
            }).orderBy('nivel_energia_mental', 'asc');

            return tarefas;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}