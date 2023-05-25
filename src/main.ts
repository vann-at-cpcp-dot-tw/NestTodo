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

  app.useGlobalFilters(new HttpExceptionFilter()) // format 錯誤拋出的格式

  await app.listen(port)
}

bootstrap()
