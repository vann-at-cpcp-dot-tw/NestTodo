import { Controller, Get, Post, Patch, Param, Query, Body, HttpCode, HttpStatus, Header } from '@nestjs/common'
import { TodoService } from 'src/features/todo/todo.service'
import { GetTodosQueryDto } from './dto/getTodosQuery.dto'
import { CreateTodoDto } from 'src/features/todo/dto/create.dto'


@Controller({
  path: 'todos',
})

export class TodoController {
  constructor( private readonly todoService: TodoService ){

  }

  @Get()
  @Header('X-NestTodo-headers', '1') // 可帶特定 header
  getTodos(@Query() query: GetTodosQueryDto ){
    return this.todoService.getTodos(query)
  }

  // @Get('/examples')
  @Get('exam*ples') // 通用路由，無論輸入 /todos/examples、/todos/exammmmples、/todos/exam_ples 都可以進入
  getExamples() {
    return this.todoService.getExamples()
  }

  @Get(':id')
  // getTodo(
  //   @Param() params: { id:string }
  // ){
  //   const { id } = params
  //   return this.todoService.getTodo(id)
  // }
  getTodo(
    @Param('id') id:string // 直接解包
  ){
    return this.todoService.getTodo(id)
  }

  @Post()
  createTodo(
    @Body()  DTO:CreateTodoDto
  ){
    return this.todoService.createTodo(DTO)
  }


  @Patch()
  @HttpCode(HttpStatus.NO_CONTENT)
  updateTodo(){
    return []
  }

}
