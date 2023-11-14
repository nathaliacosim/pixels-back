import { Module } from '@nestjs/common';
import { EntradasService } from './entradas.service';
import { EntradasController } from './entradas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EntradaSchema } from './schemas/entradas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Entrada', schema: EntradaSchema }])
  ],
  controllers: [EntradasController],
  providers: [EntradasService],
})
export class EntradasModule { }
