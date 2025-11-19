import TarefaTag from '#models/tarefa_tag'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class TarefaTagSeeder extends BaseSeeder {
  public async run () {

    await TarefaTag.createMany([
      { num_tarefa: 1, num_tag: 1, criado_por: 11111111111 },
      { num_tarefa: 2, num_tag: 2, criado_por: 22222222222 },
      { num_tarefa: 3, num_tag: 3, criado_por: 33333333333 },
      { num_tarefa: 4, num_tag: 4, criado_por: 44444444444 },
      { num_tarefa: 5, num_tag: 5, criado_por: 55555555555 },
      { num_tarefa: 6, num_tag: 6, criado_por: 66666666666 },
      { num_tarefa: 7, num_tag: 7, criado_por: 77777777777 },
      { num_tarefa: 8, num_tag: 8, criado_por: 88888888888 },
      { num_tarefa: 9, num_tag: 9, criado_por: 99999999999 },
      { num_tarefa: 10, num_tag: 10, criado_por: 10101010101 },
    ])
  }
}
