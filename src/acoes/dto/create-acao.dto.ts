import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAcaoDto {
    @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
    nome: string;

    @IsNotEmpty({ message: 'O local não pode ser vazio!' })
    local: string;

    @IsNotEmpty({ message: 'A dataHora não pode ser vazia!' })
    dataHora: Date = new Date();

    @IsNotEmpty({ message: 'A arrecadacao não pode ser vazia!' })
    arrecadacao: string;

    @IsNotEmpty({ message: 'A faixaEtaria não pode ser vazia!' })
    faixaEtaria: string;

    @IsOptional()
    observacoes: string;
}
