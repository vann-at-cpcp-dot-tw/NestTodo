import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, NotAcceptableException } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  // // 使用 pipe 來攔截請求，做到驗證和業務分離 1
  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: string) {
  //   return this.userService.findOne(+id)
  // }

  // // 使用 pipe 來攔截請求，做到驗證和業務分離 2：客製狀態碼
  // @Get(':id')
  // findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: string) {
  //   return this.userService.findOne(+id)
  // }

  // 使用 pipe 來攔截請求，做到驗證和業務分離 3：客製 Exception
  // @Get(':id')
  // findOne(@Param('id', new ParseIntPipe({
  //   exceptionFactory: ()=>{
  //     return new NotAcceptableException('無法解析為數字')
  //   }
  // })) id: string) {
  //   return this.userService.findOne(+id)
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
