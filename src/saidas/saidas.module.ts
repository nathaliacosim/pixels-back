import { Module } from '@nestjs/common';
import { SaidasService } from './saidas.service';
import { SaidasController } from './saidas.controller';
import { SaidaSchema } from './schemas/saidas.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Saida', schema: SaidaSchema }])
  ],
  controllers: [SaidasController],
  providers: [SaidasService],
})
export class SaidasModule { }
