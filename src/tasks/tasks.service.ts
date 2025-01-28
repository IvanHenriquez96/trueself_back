import { Injectable } from '@nestjs/common';

const tasks = [{ name: 'tarea1' }, { name: 'tarea2' }];

@Injectable()
export class TasksService {
  getAllTasks() {
    return [{ name: 'tarea1' }, { name: 'tarea2' }];
  }

  createTask(new_task) {
    return [...tasks, new_task];
  }
}
