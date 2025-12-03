import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations';
// import { Status } from '../../contracts/enum/status.js';
import { Frequencia } from '../../contracts/enum/frequencia.js';
import { Nivel } from '../../contracts/enum/nivel.js';
import Tarefa from './tarefa.js';
import Motivacao from './motivacao.js';
import { Status } from '../../contracts/enum/status.js';
import { ModelObject } from '@adonisjs/lucid/types/model';

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
  declare nivel_energia_fisica: number

  @column()
  declare nivel_energia_mental: number

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

  toJSON(): ModelObject {
    return{
      numero: this.numero,
      titulo: this.titulo,
      status: Status[this.status],
      descricao: this.descricao,
      ordem: this.ordem,
      frequencia: Frequencia[this.frequencia],
      nivelEnergiaFisica: Nivel[this.nivel_energia_fisica],
      nivelEnergiaMental: Nivel[this.nivel_energia_mental],
      num_tarefa: this.num_tarefa,
      num_motivacao: this.num_motivacao,
      ativo: this.ativo
    }
  }
}