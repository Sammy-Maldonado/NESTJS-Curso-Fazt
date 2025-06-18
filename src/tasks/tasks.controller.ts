import { Controller, Delete, Get, Put, Post, Patch, Body, Query, Param} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Controller('/tasks')
export class TaskController {
  tasksService: TasksService;
  
  // Inyectamos el servicio de tareas para poder usarlo en el controlador

  constructor(taskService:TasksService) {
    this.tasksService = taskService;            // Asignamos el servicio de tareas a la variable tasksService
  }

  // Ver homologo de esta llamada simplificada en el controlador de usuarios
  // En este controlador, definimos las rutas y los metodos HTTP que se van a usar para interactuar con el recurso de tareas
  // Los metodos HTTP son: GET, POST, PUT, DELETE y PATCH

  @Get()  // El metodo Get se usa para obtener un recurso
  getAlltasks(@Query() query: any) {
    console.log(query)
    return this.tasksService.getTasks();  // Llamamos al servicio de tareas para obtener las tareas y retornalo al cliente
  }

  @Get('/:id')  // con :id llamo automaticamente a cualquier id que me llegue en esa url
  getTask(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.getTask(parseInt(id));
  }

  @Post() // El metodo Post se usa para crear un nuevo recurso
  createTask(@Body() task: CreateTaskDTO) {
    return this.tasksService.createTask(task);  // Llamamos al servicio de tareas para crear una nueva tarea y retornalo al cliente
  }

  @Put()  // El metodo Put se usa para actualizar un recurso completo
  updateTask(@Body() task: UpdateTaskDTO) {
    return this.tasksService.updateTask(task);  // Llamamos al servicio de tareas para actualizar una tarea y retornalo al cliente
  }

  @Delete() // El metodo Delete se usa para eliminar un recurso
  deleteTask() {
    return this.tasksService.deleteTask();  // Llamamos al servicio de tareas para eliminar una tarea y retornalo al cliente
  }

  @Patch()  // El metodo Patch se usa para actualizar parcialmente un recurso
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}