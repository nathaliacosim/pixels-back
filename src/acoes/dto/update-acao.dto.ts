import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAcaoDto {
    @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
    @IsOptional()
    nome: string;

    @IsNotEmpty({ message: 'O local não pode ser vazio!' })
    @IsOptional()
    local: string;

    @IsNotEmpty({ message: 'A dataHora não pode ser vazia!' })
    @IsOptional()
    dataHora: Date = new Date();

    @IsNotEmpty({ message: 'A arrecadacao não pode ser vazia!' })
    @IsOptional()
    arrecadacao: string;

    @IsNotEmpty({ message: 'A faixaEtaria não pode ser vazia!' })
    @IsOptional()
    faixaEtaria: string;

    @IsOptional()
    observacoes: string;
}