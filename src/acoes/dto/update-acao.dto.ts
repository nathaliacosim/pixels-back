import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAcaoDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
    @IsOptional()
    nome: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O local não pode ser vazio!' })
    @IsOptional()
    local: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A dataHora não pode ser vazia!' })
    @IsOptional()
    dataHora: Date = new Date();

    @ApiProperty()
    @IsNotEmpty({ message: 'A arrecadacao não pode ser vazia!' })
    @IsOptional()
    arrecadacao: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A faixaEtaria não pode ser vazia!' })
    @IsOptional()
    faixaEtaria: string;

    @ApiProperty()
    @IsOptional()
    observacoes: string;
}