import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() body: { title: string; description: string }) {
    return this.tasksService.createTask(body.title, body.description);
  }

  @Get()
  async findAll() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tasksService.getTaskById(Number(+id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: { title: string; description: string }) {
    return this.tasksService.updateTask(Number(+id), body.title, body.description);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tasksService.deleteTask(Number(+id));
  }
}
