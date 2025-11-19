import { DateTime } from '../../node_modules/@types/luxon/index.js'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Motivacao from './motivacao.js';
import type { HasOne } from '@adonisjs/lucid/types/relations';
import Impedimento from './impedimento.js';

export default class ImpedimentoMotivacao extends BaseModel {
  static table = 'impedimento_motivacao';
  
  @column({ isPrimary: true })
  declare numero: number

  @column()
  declare num_motivacao: number

  @column()
  declare num_impedimento: number

  @column()
  declare ativo: boolean

  @column()
  declare criado_por: number

  @column.dateTime({ autoCreate: true })
  declare criado_em: DateTime

  @hasOne(()=> Motivacao,{
    localKey: 'num_motivacao',
    foreignKey: 'numero'
  })
  declare motivacao: HasOne<typeof Motivacao>

    @hasOne(()=> Impedimento,{
    localKey: 'num_impedimento',
    foreignKey: 'numero'
  })
  declare impedimento: HasOne<typeof Impedimento>
}