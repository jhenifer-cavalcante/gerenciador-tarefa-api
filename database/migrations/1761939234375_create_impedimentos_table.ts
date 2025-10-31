import { BaseSchema } from '@adonisjs/lucid/schema'
import { Nivel } from '../../contracts/enum/nivel.js';

export default class extends BaseSchema {
  protected tableName = 'impedimento'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('numero').primary().notNullable().unique();
      table.string('nome', 255).notNullable();
      table.enum('nivel_energia_fisica', Object.values(Nivel)).defaultTo(Nivel[1]);
      table.enum('nivel_energia_mental',Object.values(Nivel)).defaultTo(Nivel[1]);
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