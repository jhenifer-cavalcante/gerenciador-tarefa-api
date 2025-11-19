import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Categoria from '#models/categoria'

export default class CategoriaSeeder extends BaseSeeder {
  public async run () {

    await Categoria.createMany([
      {
        titulo: 'Trabalho',
        descricao: 'Tarefas relacionadas ao emprego',
        criado_por: 11111111111,
      },
      {
        titulo: 'Casa',
        descricao: 'Atividades domésticas',
        criado_por: 22222222222,
      },
      {
        titulo: 'Estudos',
        descricao: 'Matérias e cursos',
        criado_por: 33333333333,
      },
      {
        titulo: 'Saúde',
        descricao: 'Compromissos médicos e saúde pessoal',
        criado_por: 44444444444,
      },
      {
        titulo: 'Finanças',
        descricao: 'Pagamentos, cartões e contas',
        criado_por: 55555555555,
      },
      {
        titulo: 'Projetos',
        descricao: 'Projetos pessoais ou profissionais',
        criado_por: 66666666666,
      },
      {
        titulo: 'Lazer',
        descricao: 'Hobbies e atividades recreativas',
        criado_por: 77777777777,
      },
      {
        titulo: 'Família',
        descricao: 'Compromissos familiares',
        criado_por: 88888888888,
      },
      {
        titulo: 'Viagens',
        descricao: 'Planejamento e organização de viagens',
        criado_por: 99999999999,
      },
      {
        titulo: 'Compras',
        descricao: 'Itens e listas de compras',
        criado_por: 10101010101,
      },
    ])
  }
}

