import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Recompensa from '#models/recompensa'

export default class RecompensaSeeder extends BaseSeeder {
  public async run () {

    await Recompensa.createMany([
      {
        nome: 'Assistir um episódio da série favorita',
        descricao: 'Permita-se relaxar assistindo algo que gosta.',
        criado_por: 11111111111,
      },
      {
        nome: 'Comer algo especial',
        descricao: 'Um doce ou snack preferido.',
        criado_por: 22222222222,
      },
      {
        nome: 'Pausa confortável',
        descricao: 'Tire 10 minutos para relaxar.',
        criado_por: 33333333333,
      },
      {
        nome: 'Comprar algo pequeno',
        descricao: 'Um mimo barato, mas agradável.',
        criado_por: 44444444444,
      },
      {
        nome: 'Sair para caminhar',
        descricao: 'Aproveite o ar livre.',
        criado_por: 55555555555,
      },
      {
        nome: 'Tempo de jogo',
        descricao: 'Jogue algo que gosta por alguns minutos.',
        criado_por: 66666666666,
      },
      {
        nome: 'Escutar música favorita',
        descricao: 'Playlist especial de relaxamento.',
        criado_por: 77777777777,
      },
      {
        nome: 'Café especial',
        descricao: 'Um café mais elaborado como recompensa.',
        criado_por: 88888888888,
      },
      {
        nome: 'Dormir cedo',
        descricao: 'Uma noite de descanso extra.',
        criado_por: 99999999999,
      },
      {
        nome: 'Meditar',
        descricao: 'Momento de introspecção e calma.',
        criado_por: 10101010101,
      },
    ])
  }
}
