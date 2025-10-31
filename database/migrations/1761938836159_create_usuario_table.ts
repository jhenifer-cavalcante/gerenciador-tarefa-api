import { BaseSchema } from '@adonisjs/lucid/schema'
import { Tema } from '../../contracts/enum/tema.js'

export default class extends BaseSchema {
  protected tableName = 'usuario'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cpf').primary().notNullable().unique()
      table.string('p_nome', 150).nullable()
      table.string('s_nome', 150).nullable()
      table.string('email').notNullable().unique()
      table.string('senha').notNullable()
      table.enum('tema_app', Object.values(Tema)).defaultTo(Tema[2]);
      table.boolean('notificacao_silenciosa').defaultTo(true);
      table.boolean('ativo').defaultTo(true);
      table.timestamp('criado_em', { useTz: false }).notNullable().defaultTo(this.now());
      table.timestamp('atualizado_em', { useTz: false});
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}