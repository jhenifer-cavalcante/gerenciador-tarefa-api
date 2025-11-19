import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categoria'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('numero').primary().notNullable().unique();
      table.string('titulo', 255).notNullable();
      table.string('descricao');
      table.boolean('ativo').defaultTo(true);
      table.integer('criado_por').unsigned().references('cpf').inTable('usuario').notNullable();
      table.timestamp('criado_em', { useTz: false }).notNullable().defaultTo(this.now());
      table.integer('atualizado_por').unsigned().references('cpf').inTable('usuario');
      table.timestamp('atualizado_em', { useTz: false});
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}