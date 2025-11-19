import { DateTime } from '../../node_modules/@types/luxon/index.js'
import { BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import Tarefa from './tarefa.js';
import type { HasMany } from '@adonisjs/lucid/types/relations';

export default class Recompensa extends BaseModel {
  static table = 'recompensa';
  
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

  @hasMany(()=> Tarefa,{
    localKey: 'numero',
    foreignKey: 'num_recompensa'
  })
  declare tarefas: HasMany<typeof Tarefa>
}