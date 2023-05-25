import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { TodoModule } from './features/todo/todo.module'
import { CopyTodoModule } from './features/copy-todo/copy-todo.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TodoModule,
    CopyTodoModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
