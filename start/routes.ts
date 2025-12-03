import router from '@adonisjs/core/services/router'

const TarefaController = () => import('#controllers/tarefa_controller');
const SubTarefaController = () => import('#controllers/sub_tarefa_controller');

router.group(()=>{
  router.group(()=>{
    router.get('/', [TarefaController, 'index']).as('tarefas.index')
    router.get('/:id', [TarefaController, 'show']).where('id', router.matchers.number()).as('tarefas.show')
    router.put('/:id', [TarefaController, 'update']).where('id', router.matchers.number()).as('tarefas.update')
    router.post('/criar', [TarefaController, 'create']).as('tarefas.criar');
  }).prefix('tarefas');

  router.group(()=>{
    router.put('/:id', [SubTarefaController, 'update']).where('id', router.matchers.number()).as('subTarefas.update')
    router.get('/:id', [SubTarefaController, 'show']).where('id', router.matchers.number()).as('subTarefas.show')
  }).prefix('subTarefas')
}).prefix('v1/api')