import { Injectable } from '@nestjs/common'
import { GetTodosQueryDto } from './dto/getTodosQuery.dto'
import { CreateTodoDto } from 'src/features/todo/dto/create.dto'

interface ITodo {
  id: string | number
  title: string
  description?: string
}

@Injectable()
export class TodoService {
  private todos: ITodo[] = []

  async getTodos(query:GetTodosQueryDto) {

    // 可以回傳 Promise 或 async/await，NestJS 會去處理它，並將 resolve 的資料回傳

    // Promise
    // return new Promise((resolve, reject)=>{
    //   setTimeout(()=>{
    //     resolve({
    //       query,
    //       list: []
    //     })
    //   }, 2000)
    // })

    // async/await
    const result = await new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({
          query,
          list: []
        })
      }, 2000)
    })

    return result
  }

  getExamples() {
    return [
      {
        id: '1',
        title: 'Example 1',
        description: '',
      }
    ]
  }

  getTodo(id:string){
    return {
      id,
      title: `Title: ${id}`,
      description: '',
    }
  }

  createTodo(DTO:CreateTodoDto){
    const id = 1

    const newItem = {
      id,
      ...DTO
    }

    this.todos.push(newItem)

    return newItem
  }
}
