import { Controller, Post, Body, Version } from '@nestjs/common'
import { TodoService } from 'src/features/todo/todo.service'
import { CreateTodoDto } from 'src/features/todo/dto/create.dto'

@Controller({
  path: 'copy-todos',
  version: ['2', 'test'], // 可以複寫 app 層級的版本，另外，使用陣列表示可以同時使用這些詞彙
})
export class CopyTodoController {
  constructor(
    private readonly todoService: TodoService
  ){}

  @Post()
  @Version('latest') // 可以單獨複寫版本
  createTodo(
    @Body()  DTO:CreateTodoDto
  ){
    return this.todoService.createTodo(DTO)
  }

}
