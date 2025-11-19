import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import ImpedimentoMotivacao from './impedimento_motivacao.js';
import type { HasMany } from '@adonisjs/lucid/types/relations';
import SubTarefa from './sub_tarefa.js';

export default class Motivacao extends BaseModel {
  static table = 'motivacao';
  
  @column({ isPrimary: true })
  declare numero: number

  @column()
  declare nome: string

  @column()
  declare duracao: string

  @column()
  declare ativo: boolean

  @column()
  declare criado_por: number

  @column.dateTime({ autoCreate: true })
  declare criado_em: DateTime

  @hasMany(()=> ImpedimentoMotivacao,{
    localKey: 'numero',
    foreignKey: 'num_motivacao'
  })
  declare impedimento_motivacao: HasMany<typeof ImpedimentoMotivacao>

  @hasMany(()=> SubTarefa,{
    localKey: 'numero',
    foreignKey: 'num_motivacao'
  })
  declare sub_tarefa: HasMany<typeof SubTarefa>
}