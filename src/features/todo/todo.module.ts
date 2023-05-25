import { Module } from '@nestjs/common'
import { TodoController } from './todo.controller'
import { TodoService } from './todo.service'

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService] // 只要遵照設計原則來使用，每個 module 都具有高度的重用性。這裡嘗試將 TodoService 從 TodoModule 匯出，然後讓 copy-todo 這個 module 使用
})

export class TodoModule {}
