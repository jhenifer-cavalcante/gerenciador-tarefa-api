import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'motivacao'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('numero').primary().notNullable().unique();
      table.string('nome', 255).notNullable().unique();
      table.time('duracao').notNullable();
      table.boolean('ativo').defaultTo(true);
      table.integer('criado_por').unsigned().references('cpf').inTable('usuario');
      table.timestamp('criado_em', { useTz: false }).notNullable().defaultTo(this.now());
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}