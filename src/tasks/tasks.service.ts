import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(title: string, description: string) {
    return this.prisma.task.create({
      data: {
        title,
        description,
      },
    });
  }

  async getAllTasks() {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  async updateTask(id: number, title: string, description: string) {
    return this.prisma.task.update({
      where: { id },
      data: { title, description },
    });
  }

  async deleteTask(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
