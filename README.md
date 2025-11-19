# gerenciador-tarefa-api

## 1º passo: Criar o banco de dados

### No postgreSQL, crie o banco com o seguinte nome:

```sql
CREATE SCHEMA gerenciador-tarefa
```

## 2º passo: Criar e modificar o arquivo .env

- .env: *Na pasta principal*
```bash
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=KTvS8hBmuy6Mpwdl70-yrg5wtQb2ZDWr
NODE_ENV=development

### ACESSO AO POSTGRES ###
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua-senha
DB_DATABASE=gerenciador-tarefa
```
---------------------------------------------------------------------------------------------------------
### *ATENÇÃO: precisa ter instalado o Node versão 20.6 ou maior para os comandos abaixo funcionarem*.
---------------------------------------------------------------------------------------------------------
## 3º passo: Baixar bibliotecas do nodeJS

```typescript
npm install // adicione a tag --force, se necessário
```
## 4º passo: Executar as migrations e seeds sequencialmente

```typescript
node ace migration:run
node ace db:seed
```

## 5º passo: Inicializar a aplicação

```typescript
npm run start
```