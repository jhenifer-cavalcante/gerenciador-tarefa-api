import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Usuario from '#models/usuario'
import { Tema } from '../../contracts/enum/tema.js'

export default class UsuarioSeeder extends BaseSeeder {
  public async run () {

    await Usuario.createMany([
      {
        cpf: 11111111111,
        p_nome: 'Carlos',
        s_nome: 'Silva',
        email: 'carlos.silva@example.com',
        senha: 'senha123',
        tema_app: Tema.ESCURO,
      },
      {
        cpf: 22222222222,
        p_nome: 'Maria',
        s_nome: 'Oliveira',
        email: 'maria.oliveira@example.com',
        senha: 'senha123',
        tema_app: Tema.CLARO,
      },
      {
        cpf: 33333333333,
        p_nome: 'João',
        s_nome: 'Almeida',
        email: 'joao.almeida@example.com',
        senha: 'senha123',
        tema_app: Tema.ESCURO,
      },
      {
        cpf: 44444444444,
        p_nome: 'Fernanda',
        s_nome: 'Souza',
        email: 'fernanda.souza@example.com',
        senha: 'senha123',
        tema_app: Tema.CLARO,
      },
      {
        cpf: 55555555555,
        p_nome: 'Lucas',
        s_nome: 'Moraes',
        email: 'lucas.moraes@example.com',
        senha: 'senha123',
        tema_app: Tema.ESCURO,
      },
      {
        cpf: 66666666666,
        p_nome: 'Patrícia',
        s_nome: 'Castro',
        email: 'patricia.castro@example.com',
        senha: 'senha123',
        tema_app: Tema.CLARO,
      },
      {
        cpf: 77777777777,
        p_nome: 'Ricardo',
        s_nome: 'Gomes',
        email: 'ricardo.gomes@example.com',
        senha: 'senha123',
        tema_app: Tema.ESCURO,
      },
      {
        cpf: 88888888888,
        p_nome: 'Juliana',
        s_nome: 'Barbosa',
        email: 'juliana.barbosa@example.com',
        senha: 'senha123',
        tema_app: Tema.CLARO,
      },
      {
        cpf: 99999999999,
        p_nome: 'Leonardo',
        s_nome: 'Pereira',
        email: 'leonardo.pereira@example.com',
        senha: 'senha123',
        tema_app: Tema.ESCURO,
      },
      {
        cpf: 10101010101,
        p_nome: 'Amanda',
        s_nome: 'Ribeiro',
        email: 'amanda.ribeiro@example.com',
        senha: 'senha123',
        tema_app: Tema.CLARO,
      },
    ])
  }
}
