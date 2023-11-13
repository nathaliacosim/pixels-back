import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntradasModule } from './entradas/entradas.module';
import { SaidasModule } from './saidas/saidas.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { AcoesModule } from './acoes/acoes.module';

@Module({
  imports: [EntradasModule, SaidasModule, ColaboradoresModule, AcoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
