import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations';
import Categoria from './categoria.js';
import TarefaTag from './tarefa_tag.js';

export default class Tag extends BaseModel {
  static table = 'tag';
  
  @column({ isPrimary: true })
  declare numero: number

  @column()
  declare titulo: string

  @column()
  declare num_categoria: number

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

  @hasOne(()=> Categoria,{
    foreignKey: 'numero',
    localKey: 'num_categoria'
  })
  declare categoria: HasOne<typeof Categoria>

  @hasMany(()=> TarefaTag,{
    localKey: 'numero',
    foreignKey: 'num_tag'
  })
  declare tarefa_tag: HasMany<typeof TarefaTag>
}