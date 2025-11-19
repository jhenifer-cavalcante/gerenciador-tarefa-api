import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations';
import Categoria from './categoria.js';
import { Status } from '../../contracts/enum/status.js';
import { Frequencia } from '../../contracts/enum/frequencia.js';
import { Nivel } from '../../contracts/enum/nivel.js';
import Recompensa from './recompensa.js';
import SubTarefa from './sub_tarefa.js';
import TarefaTag from './tarefa_tag.js';

export default class Tarefa extends BaseModel {
  static table = 'tarefa';
  
  @column({ isPrimary: true })
  declare numero: number

  @column()
  declare titulo: string

  @column()
  declare status: Status

  @column()
  declare descricao: string

  @column()
  declare prazo: string

  @column()
  declare frequencia: Frequencia

  @column()
  declare nivel_energia_fisica: Nivel

  @column()
  declare nivel_energia_mental: Nivel

  @column()
  declare num_categoria: number

  @column()
  declare num_recompensa: number

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

  @hasOne(()=> Recompensa,{
    foreignKey: 'numero',
    localKey: 'num_recompensa'
  })
  declare recompensa: HasOne<typeof Recompensa>

  @hasMany(()=> SubTarefa,{
    localKey: 'numero',
    foreignKey: 'num_tarefa'
  })
  declare sub_tarefa: HasMany<typeof SubTarefa>

  @hasMany(()=> TarefaTag,{
    localKey: 'numero',
    foreignKey: 'num_tarefa'
  })
  declare tarefa_tag: HasMany<typeof TarefaTag>
}