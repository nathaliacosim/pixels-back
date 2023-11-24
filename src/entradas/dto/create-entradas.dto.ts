import { ApiProperty } from '@nestjs/swagger';
import { CreateEntradaDto } from './create-entrada.dto';

export class CreateEntradasDto {
  @ApiProperty({ type: [CreateEntradaDto] })
  entradas: CreateEntradaDto[];
}
