import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { TodoModule } from './features/todo/todo.module'
import { CopyTodoModule } from './features/copy-todo/copy-todo.module'
import { APP_FILTER } from '@nestjs/core'
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter'

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
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule {}
