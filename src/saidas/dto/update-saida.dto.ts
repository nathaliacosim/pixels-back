import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSaidaDto {
    @IsNotEmpty({ message: 'O destino não pode ser vazio!' })
    @ApiProperty()
    @IsOptional()
    destino: string;

    @IsNotEmpty({ message: 'O valor não pode ser vazio!' })
    @ApiProperty()
    @IsOptional()
    valor: number;

    @IsNotEmpty({ message: 'A data/hora não pode ser vazia!' })
    @ApiProperty()
    @IsOptional()
    dataHora: string;

    @IsNotEmpty({ message: 'A descrição não pode ser vazia!' })
    @ApiProperty()
    @IsOptional()
    descricao: string;

    @IsNotEmpty({ message: 'A forma de pagamento não pode ser vazia!' })
    @ApiProperty()
    @IsOptional()
    formaPagamento: string;
}
