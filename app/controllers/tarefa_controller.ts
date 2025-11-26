import TarefaService from '#services/tarefa_service';
import { criarTarefa } from '#validators/tarefa';
import type { HttpContext } from '@adonisjs/core/http'

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
}