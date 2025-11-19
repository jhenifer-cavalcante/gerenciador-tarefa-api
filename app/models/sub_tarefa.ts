import { DateTime } from '../../node_modules/@types/luxon/index.js'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations';
import { Status } from '../../contracts/enum/status.js';
import { Frequencia } from '../../contracts/enum/frequencia.js';
import { Nivel } from '../../contracts/enum/nivel.js';
import Tarefa from './tarefa.js';
import Motivacao from './motivacao.js';

export default class SubTarefa extends BaseModel {
  static table = 'sub_tarefa';
  
  @column({ isPrimary: true })
  declare numero: number

  @column()
  declare titulo: string

  @column()
  declare status: Status

  @column()
  declare ordem: number

  @column()
  declare descricao: string

  @column()
  declare frequencia: Frequencia

  @column()
  declare nivel_energia_fisica: Nivel

  @column()
  declare nivel_energia_mental: Nivel

  @column()
  declare num_tarefa: number

  @column()
  declare num_motivacao: number

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
    foreignKey: 'numero',
    localKey: 'num_tarefa'
  })
  declare tarefa: HasOne<typeof Tarefa>

  @hasOne(()=> Motivacao,{
    foreignKey: 'numero',
    localKey: 'num_motivacao'
  })
  declare motivacao: HasOne<typeof Motivacao>
}