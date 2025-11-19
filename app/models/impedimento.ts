import { Nivel } from '../../contracts/enum/nivel.js';
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import ImpedimentoMotivacao from './impedimento_motivacao.js';
import type { HasMany } from '@adonisjs/lucid/types/relations';

export default class Impedimento extends BaseModel {
  static table = 'impedimento';
  
  @column({ isPrimary: true })
  declare numero: number

  @column()
  declare nome: string

  @column()
  declare nivel_energia_fisica: Nivel

  @column()
  declare nivel_energia_mental: Nivel

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

  @hasMany(()=> ImpedimentoMotivacao,{
    localKey: 'numero',
    foreignKey: 'num_impedimento'
  })
  declare impedimento_motivacao: HasMany<typeof ImpedimentoMotivacao>
}