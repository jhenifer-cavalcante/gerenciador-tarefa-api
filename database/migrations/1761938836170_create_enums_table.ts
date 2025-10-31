import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {


  async up() {
    // enum do NÍVEL
    await this.db.rawQuery("CREATE TYPE nivel AS ENUM ('BAIXA', 'MODERADA', 'ALTA', 'INTENSA)");

    // enum da FREQUÊNCIA
    await this.db.rawQuery("CREATE TYPE frequencia AS ENUM ('DIARIA','SEMANAL','MENSAL','ANUAL','UNICA')");
  }

  async down() {

  }
}