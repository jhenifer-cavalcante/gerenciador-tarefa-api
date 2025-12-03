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


## Dependências e Bibliotecas:

```json
 "devDependencies": {
    "@adonisjs/assembler": "^7.8.2",
    "@adonisjs/eslint-config": "^2.0.0",
    "@adonisjs/prettier-config": "^1.4.4",
    "@adonisjs/tsconfig": "^1.4.0",
    "@japa/api-client": "^3.1.0",
    "@japa/assert": "^4.0.1",
    "@japa/plugin-adonisjs": "^4.0.0",
    "@japa/runner": "^4.2.0",
    "@swc/core": "1.11.24",
    "@types/luxon": "^3.7.1",
    "@types/node": "^22.15.18",
    "eslint": "^9.26.0",
    "hot-hook": "^0.4.0",
    "pino-pretty": "^13.0.0",
    "prettier": "^3.5.3",
    "ts-node-maintained": "^10.9.5",
    "typescript": "~5.8"
  },
  "dependencies": {
    "@adonisjs/auth": "^9.4.0",
    "@adonisjs/core": "^6.18.0",
    "@adonisjs/cors": "^2.2.1",
    "@adonisjs/lucid": "^21.6.1",
    "@vinejs/vine": "^3.0.1",
    "luxon": "^3.7.2",
    "pg": "^8.16.3",
    "reflect-metadata": "^0.2.2"
  }
```
