import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateColaboradorDto {
    @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
    nome: string;

    @IsNotEmpty({ message: 'A cidade não pode ser vazia!' })
    cidade: string;

    @IsNotEmpty({ message: 'A data de admissão não pode ser vazia!' })
    dataAdmissao: Date = new Date();

    @IsNotEmpty({ message: 'O tipo de participação não pode ser vazio!' })
    tipoParticipacao: string;

    @IsOptional()
    foto: string;
}