import { DateTime } from '../../node_modules/@types/luxon/index.js'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { Tema } from '../../contracts/enum/tema.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'senha',
})

export default class Usuario extends compose(BaseModel, AuthFinder) {
  static table = 'usuario';

  @column({ isPrimary: true })
  declare cpf: number

  @column()
  declare p_nome: string

  @column()
  declare s_nome: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare senha: string

  @column()
  declare tema_app: Tema

  @column()
  declare notificacao_silenciosa: boolean

  @column()
  declare ativo: boolean

  @column.dateTime({ autoCreate: true })
  declare criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare atualizado_em: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(Usuario)
}