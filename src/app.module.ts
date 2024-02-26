import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { EntradasModule } from './entradas/entradas.module';
import { SaidasModule } from './saidas/saidas.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { AcoesModule } from './acoes/acoes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CorsMiddleware } from './cors.middleware';
import * as dotenv from 'dotenv';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AlbumModule } from './album/album.module';
import { UploadsModule } from './uploads/uploads.module';

dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

if (!dbUser || !dbPassword) {
  throw new Error(
    'Variáveis de ambiente DB_USER ou DB_PASSWORD não definidas.',
  );
}

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'uploads'),
      serveRoot: '/api/uploads/',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${dbUser}:${dbPassword}@pixels.rb1rza5.mongodb.net/pixels?retryWrites=true&w=majority`,
    ),
    EntradasModule,
    SaidasModule,
    ColaboradoresModule,
    AcoesModule,
    AlbumModule,
    UploadsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
