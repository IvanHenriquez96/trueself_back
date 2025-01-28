import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //Get All Tasks
  @Get()
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  async createTask(@Body() new_task) {
    return this.tasksService.createTask(new_task);
  }
}
