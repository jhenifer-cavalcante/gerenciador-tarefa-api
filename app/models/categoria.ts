import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Tag from './tag.js';
import type { HasMany } from '@adonisjs/lucid/types/relations';
import Tarefa from './tarefa.js';

export default class Categoria extends BaseModel {
  static table = 'categoria';
  
  @column({ isPrimary: true })
  declare numero: number

  @column()
  declare titulo: string

  @column()
  declare descricao: string

  @column()
  declare ativo: boolean

  @column()
  declare criado_por: number

  @column()
  declare atualizado_por: number

  @column.dateTime({ autoCreate: true })
  declare criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare atualizado_em: DateTime | null

  @hasMany(()=> Tag,{
    localKey: 'numero',
    foreignKey: 'num_categoria'
  })
  declare tags: HasMany<typeof Tag>

  @hasMany(()=> Tarefa,{
    localKey: 'numero',
    foreignKey: 'num_tarefa'
  })
  declare tarefas: HasMany<typeof Tarefa>
}