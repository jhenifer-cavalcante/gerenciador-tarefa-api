import { DateTime } from '../../node_modules/@types/luxon/index.js'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations';
import Tarefa from './tarefa.js';
import Tag from './tag.js';

export default class TarefaTag extends BaseModel {
  static table = 'tarefa_tag';
  
  @column({ isPrimary: true })
  declare numero: number

  @column()
  declare num_tarefa: number

  @column()
  declare num_tag: number

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

  @hasOne(()=> Tarefa,{
    localKey: 'num_tarefa',
    foreignKey: 'numero'
  })
  declare motivacao: HasOne<typeof Tarefa>

  @hasOne(()=> Tag,{
    localKey: 'num_tag',
    foreignKey: 'numero'
  })
  declare tag: HasOne<typeof Tag>
}