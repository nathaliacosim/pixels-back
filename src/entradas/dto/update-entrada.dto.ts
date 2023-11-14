import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEntradaDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'O nome do doador não pode ser vazio!' })
    @IsOptional()
    nomeDoador: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O valor não pode ser vazio!' })
    @IsOptional()
    valor: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'A dataHora não pode ser vazia!' })
    @IsOptional()
    dataHora: Date = new Date();

    @ApiProperty()
    @IsNotEmpty({ message: 'O documento não pode ser vazio!' })
    @IsOptional()
    documento: string;
}
