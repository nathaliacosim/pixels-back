import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAcaoDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
    nome: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O local não pode ser vazio!' })
    local: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A dataHora não pode ser vazia!' })
    dataHora: Date = new Date();

    @ApiProperty()
    @IsNotEmpty({ message: 'A arrecadacao não pode ser vazia!' })
    arrecadacao: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A faixaEtaria não pode ser vazia!' })
    faixaEtaria: string;

    @ApiProperty()
    @IsOptional()
    observacoes: string;
}
