import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'impedimento_motivacao'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('numero').primary().notNullable().unique()
      table.integer('num_motivacao').unsigned().references('numero').inTable('motivacao').notNullable();
      table.integer('num_impedimento').unsigned().references('numero').inTable('impedimento').notNullable();
      table.boolean('ativo').defaultTo(true);
      table.integer('criado_por').unsigned().references('cpf').inTable('usuario');
      table.timestamp('criado_em', { useTz: false }).notNullable().defaultTo(this.now());
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}