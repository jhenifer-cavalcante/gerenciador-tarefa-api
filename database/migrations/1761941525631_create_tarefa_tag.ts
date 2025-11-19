import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tarefa_tag'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('numero').primary().notNullable().unique();
      table.integer('num_tarefa').unsigned().references('numero').inTable('tarefa').notNullable().onDelete('CASCADE');
      table.integer('num_tag').unsigned().references('numero').inTable('tag').notNullable().onDelete('CASCADE');
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