import SubTarefa from '#models/sub_tarefa';
import SubTarefaService from '#services/sub_tarefa_service';
import { atualizarSubTarefa } from '#validators/sub_tarefa';
import type { HttpContext } from '@adonisjs/core/http'
import { SubTarefaInterface } from '../interfaces/subTarefa.js';

export default class SubTarefaController{
    private service: SubTarefaService;

    constructor(){
        this.service = new SubTarefaService();
    }

    public async show({ params, response }: HttpContext) {
        const result: SubTarefa[] = await this.service.show(params.id);
        return response.status(200).send({
            status: true,
            message: `Registro encontrado!`,
            data: result
        })
    }

    public async update({request, params, response}: HttpContext){
        const {id} = params;
        const data = await atualizarSubTarefa.validate(request.all());
        const tarefaInfo: SubTarefaInterface ={
            ...data
        }

        await this.service.update(id, tarefaInfo, 10101010101);
        return response.status(201).send({
            status: true,
            message: `Registro atualizado com sucesso!`,
            data: null
        })
    }
}