import { Module } from '@nestjs/common';
import { AcoesService } from './acoes.service';
import { AcoesController } from './acoes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AcoesSchema } from './schemas/acoes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Acao', schema: AcoesSchema }])
  ],
  controllers: [AcoesController],
  providers: [AcoesService],
})
export class AcoesModule { }
