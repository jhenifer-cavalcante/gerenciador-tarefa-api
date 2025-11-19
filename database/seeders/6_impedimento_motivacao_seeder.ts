import ImpedimentoMotivacao from '#models/impedimento_motivacao'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ImpedimentoMotivacaoSeeder extends BaseSeeder {
  public async run () {

    await ImpedimentoMotivacao.createMany([
      { num_motivacao: 1, num_impedimento: 1, criado_por: 11111111111 },
      { num_motivacao: 2, num_impedimento: 3, criado_por: 22222222222 },
      { num_motivacao: 3, num_impedimento: 5, criado_por: 33333333333 },
      { num_motivacao: 4, num_impedimento: 2, criado_por: 44444444444 },
      { num_motivacao: 5, num_impedimento: 4, criado_por: 55555555555 },
      { num_motivacao: 6, num_impedimento: 7, criado_por: 66666666666 },
      { num_motivacao: 7, num_impedimento: 9, criado_por: 77777777777 },
      { num_motivacao: 8, num_impedimento: 6, criado_por: 88888888888 },
      { num_motivacao: 9, num_impedimento: 8, criado_por: 99999999999 },
      { num_motivacao: 10, num_impedimento: 10, criado_por: 10101010101 },
    ])
  }
}
