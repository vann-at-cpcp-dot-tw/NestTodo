import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'

@Catch()
export class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter{
  catch(exception:T, host: ArgumentsHost) {
    // MicroService 的封裝內容
    // const ctx = host.switchToRpc

    // WebSocket 的封裝內容
    // const ctx = host.switchToWs()

    // HTTP Server 的封裝內容
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const status = exception.getStatus()
    const message = exception.getResponse()
    const timestamp = new Date().toISOString()
    const responseObject = {
      code: status,
      message,
      timestamp
    }

    response.status(status).json(responseObject)

  }
}
