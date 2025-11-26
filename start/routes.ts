import router from '@adonisjs/core/services/router'

const TarefaController = () => import('#controllers/tarefa_controller');

router.group(()=>{
  router.group(()=>{
    router.post('/criar', [TarefaController, 'create']).as('tarefas.criar');
  }).prefix('tarefas')
}).prefix('v1/api')