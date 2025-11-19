import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Impedimento from '#models/impedimento'
import { Nivel } from '../../contracts/enum/nivel.js';

export default class ImpedimentoSeeder extends BaseSeeder {
  public async run () {

    await Impedimento.createMany([
      {
        nome: 'Cansaço físico extremo',
        nivel_energia_fisica: Nivel.BAIXA,
        nivel_energia_mental: Nivel.MODERADA,
        criado_por: 11111111111,
      },
      {
        nome: 'Falta de foco',
        nivel_energia_fisica: Nivel.MODERADA,
        nivel_energia_mental: Nivel.BAIXA,
        criado_por: 22222222222,
      },
      {
        nome: 'Estresse emocional',
        nivel_energia_fisica: Nivel.MODERADA,
        nivel_energia_mental: Nivel.INTENSA,
        criado_por: 33333333333,
      },
      {
        nome: 'Pouco tempo disponível',
        nivel_energia_fisica: Nivel.ALTA,
        nivel_energia_mental: Nivel.MODERADA,
        criado_por: 44444444444,
      },
      {
        nome: 'Sono irregular',
        nivel_energia_fisica: Nivel.BAIXA,
        nivel_energia_mental: Nivel.BAIXA,
        criado_por: 55555555555,
      },
      {
        nome: 'Excesso de tarefas',
        nivel_energia_fisica: Nivel.MODERADA,
        nivel_energia_mental: Nivel.ALTA,
        criado_por: 66666666666,
      },
      {
        nome: 'Desmotivação',
        nivel_energia_fisica: Nivel.MODERADA,
        nivel_energia_mental: Nivel.BAIXA,
        criado_por: 77777777777,
      },
      {
        nome: 'Doença leve',
        nivel_energia_fisica: Nivel.BAIXA,
        nivel_energia_mental: Nivel.MODERADA,
        criado_por: 88888888888,
      },
      {
        nome: 'Problemas pessoais',
        nivel_energia_fisica: Nivel.MODERADA,
        nivel_energia_mental: Nivel.INTENSA,
        criado_por: 99999999999,
      },
      {
        nome: 'Falta de recursos',
        nivel_energia_fisica: Nivel.ALTA,
        nivel_energia_mental: Nivel.MODERADA,
        criado_por: 10101010101,
      },
    ])
  }
}

