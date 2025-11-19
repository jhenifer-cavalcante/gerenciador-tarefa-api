import Motivacao from '#models/motivacao'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class MotivacaoSeeder extends BaseSeeder {
  public async run () {

    await Motivacao.createMany([
      {
        nome: 'Respiração profunda',
        duracao: '00:05:00',
        criado_por: 11111111111,
      },
      {
        nome: 'Alongamento rápido',
        duracao: '00:03:00',
        criado_por: 22222222222,
      },
      {
        nome: 'Meditação curta',
        duracao: '00:10:00',
        criado_por: 33333333333,
      },
      {
        nome: 'Ler uma frase motivacional',
        duracao: '00:02:00',
        criado_por: 44444444444,
      },
      {
        nome: 'Pausa para água',
        duracao: '00:01:00',
        criado_por: 55555555555,
      },
      {
        nome: 'Caminhada leve',
        duracao: '00:07:00',
        criado_por: 66666666666,
      },
      {
        nome: 'Música animadora',
        duracao: '00:04:00',
        criado_por: 77777777777,
      },
      {
        nome: 'Autoconversa positiva',
        duracao: '00:03:00',
        criado_por: 88888888888,
      },
      {
        nome: 'Alongamento de pescoço',
        duracao: '00:01:30',
        criado_por: 99999999999,
      },
      {
        nome: 'Respiração guiada',
        duracao: '00:06:00',
        criado_por: 10101010101,
      },
    ])
  }
}
