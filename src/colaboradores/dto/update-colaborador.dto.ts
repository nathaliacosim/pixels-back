import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateColaboradorDto {
    @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
    @IsOptional()
    nome: string;

    @IsNotEmpty({ message: 'A cidade não pode ser vazia!' })
    @IsOptional()
    cidade: string;

    @IsNotEmpty({ message: 'A data de admissão não pode ser vazia!' })
    @IsOptional()
    dataAdmissao: Date = new Date();

    @IsNotEmpty({ message: 'O tipo de participação não pode ser vazio!' })
    @IsOptional()
    tipoParticipacao: string;

    @IsOptional()
    foto: string;
}
