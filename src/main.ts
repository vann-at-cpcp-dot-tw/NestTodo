import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { VersioningType } from '@nestjs/common'
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter'

async function bootstrap() {

  const app = await NestFactory.create(AppModule)
  const configService: ConfigService = app.get<ConfigService>(ConfigService)
  const port = configService.get('APP_PORT') || 3000

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  })

  // 使用 useGlobalFilters 可以全域的 format 錯誤拋出的格式，但更建議在 module 層級，透過依賴注入 custom provider 來實作（請至 app.module.ts 查看）
  // app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(port)
}

bootstrap()
