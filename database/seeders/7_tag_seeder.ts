import Tag from '#models/tag'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class TagSeeder extends BaseSeeder {
  public async run () {

    await Tag.createMany([
      { titulo: 'Urgente', num_categoria: 1, criado_por: 11111111111 },
      { titulo: 'Importante', num_categoria: 2, criado_por: 22222222222 },
      { titulo: 'Rotina', num_categoria: 3, criado_por: 33333333333 },
      { titulo: 'Saúde', num_categoria: 4, criado_por: 44444444444 },
      { titulo: 'Estudo', num_categoria: 5, criado_por: 55555555555 },
      { titulo: 'Casa', num_categoria: 6, criado_por: 66666666666 },
      { titulo: 'Trabalho', num_categoria: 7, criado_por: 77777777777 },
      { titulo: 'Lazer', num_categoria: 8, criado_por: 88888888888 },
      { titulo: 'Metas', num_categoria: 9, criado_por: 99999999999 },
      { titulo: 'Financeiro', num_categoria: 10, criado_por: 10101010101 },
    ])
  }
}
