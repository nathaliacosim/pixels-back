import { Module } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { ColaboradoresController } from './colaboradores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ColaboradorSchema } from './schemas/colaboradores.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Colaborador', schema: ColaboradorSchema }])
  ],
  controllers: [ColaboradoresController],
  providers: [ColaboradoresService],
})
export class ColaboradoresModule { }
