import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { EntradasModule } from './entradas/entradas.module';
import { SaidasModule } from './saidas/saidas.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { AcoesModule } from './acoes/acoes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CorsMiddleware } from './cors.middleware';
import * as dotenv from 'dotenv';
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${dbUser}:${dbPassword}@pixels.rb1rza5.mongodb.net/pixels?retryWrites=true&w=majority`),
    EntradasModule,
    SaidasModule,
    ColaboradoresModule,
    AcoesModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}