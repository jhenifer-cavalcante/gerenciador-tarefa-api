import TarefaService from '#services/tarefa_service';
import { atualizarTarefa, criarTarefa } from '#validators/tarefa';
import type { HttpContext } from '@adonisjs/core/http'
import { TarefaInterface } from '../interfaces/tarefa.js';
import Tarefa from '#models/tarefa';

export default class TarefaController{
    private service: TarefaService;

    constructor(){
        this.service = new TarefaService();
    }

    public async create({request, response}: HttpContext){
        const data = await criarTarefa.validate(request.all());

        const result: number = await this.service.create(data,10101010101);
        return response.status(201).send({
            status: true,
            message: `Tarefa cadastrada com sucesso!`,
            data: result
        })
    }

    public async update({request, params, response}: HttpContext){
        const {id} = params;
        const data = await atualizarTarefa.validate(request.all());
        const tarefaInfo: TarefaInterface ={
            ...data
        }

        await this.service.update(id, tarefaInfo, 10101010101);
        return response.status(201).send({
            status: true,
            message: `Registro atualizado com sucesso!`,
            data: null
        })
    }

    public async index({ request, response }: HttpContext) {
        const params = request.qs();
        const result: Tarefa[] = await this.service.index(params);
        return response.status(200).send({
            status: true,
            message: `${result.length == 1? result.length + ' registro encontrado!' : result.length + ' registros encontrados!' }`,
            data: result
        })
    }

    public async show({ params, response }: HttpContext) {
        const result: Tarefa | undefined = await this.service.show(params.id);
        return response.status(200).send({
            status: true,
            message: `Registro encontrado!`,
            data: result
        })
    }

}