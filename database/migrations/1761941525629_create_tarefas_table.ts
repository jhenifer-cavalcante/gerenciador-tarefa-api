import { BaseSchema } from '@adonisjs/lucid/schema'
import { Status } from '../../contracts/enum/status.js';
import { Frequencia } from '../../contracts/enum/frequencia.js';
import { Nivel } from '../../contracts/enum/nivel.js';

export default class extends BaseSchema {
  protected tableName = 'tarefas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('numero').primary().notNullable().unique();
      table.string('titulo', 255).notNullable();
      table.enum('status', Object.values(Status)).defaultTo(Status[0]);
      table.string('descricao');
      table.date('prazo');
      table.enum('frequencia', Object.values(Frequencia)).defaultTo(Frequencia[5]);
      table.enum('nivel_energia_fisica', Object.values(Nivel)).defaultTo(Nivel[1]);
      table.enum('nivel_energia_mental',Object.values(Nivel)).defaultTo(Nivel[1]);
      table.integer('num_categoria').unsigned().references('numero').inTable('categoria').notNullable();
      table.integer('num_recompensa').unsigned().references('numero').inTable('recompensa').notNullable();
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