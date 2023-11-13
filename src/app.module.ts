import { Module } from '@nestjs/common';
import { EntradasModule } from './entradas/entradas.module';
import { SaidasModule } from './saidas/saidas.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { AcoesModule } from './acoes/acoes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://pixelsdecarinho:<senha>@pixels.rb1rza5.mongodb.net/pixels?retryWrites=true&w=majority'),
    EntradasModule,
    SaidasModule,
    ColaboradoresModule,
    AcoesModule]
})
export class AppModule { }