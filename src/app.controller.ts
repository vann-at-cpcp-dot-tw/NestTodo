import { Controller, Get, HttpStatus, HttpException, BadRequestException, NotFoundException, UseFilters, Query } from '@nestjs/common'
import { AppService } from './app.service'
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  // 使用 @UseFilters 客製錯誤拋出的格式，可以在個別路由中套用，但更建議在 app 層級統一使用 app.useGlobalFilters (請至 main.ts 查看)
  // @UseFilters(HttpExceptionFilter)
  getHello(@Query() query:{showMeError:string}): string {
    if( query.showMeError ){
      // 如果拋出這種錯誤，那麼 client 端只會收到 500，而不會有完整的錯誤訊息，這是因為 NestJS 只能夠接受 NestJS 內建的 HttpException 與繼承該類別的 HttpException
      // throw new Error('錯誤！')

      // 標準化錯誤處理
      const status = HttpStatus.BAD_REQUEST
      throw new HttpException('錯誤！', status)

      // 標準化錯誤處理 + 客製回應格式 (不建議，建議統一用 filter 整理格式）
      // const status = HttpStatus.BAD_REQUEST
      // throw new HttpException({
      //   code: status,
      //   msg: '錯誤！',
      // }, status)

      // 直接使用內建 Exception 拋錯
      // throw new BadRequestException('錯誤！')

    // 直接使用內建 Exception 拋錯 + 客製回應格式（不建議，建議統一用 filter 整理格式）
    // throw new BadRequestException({
    //   msg: '錯誤！'
    // })
    }

    return this.appService.getHello()
  }
}
