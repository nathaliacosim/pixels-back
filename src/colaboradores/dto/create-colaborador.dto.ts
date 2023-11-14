import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateColaboradorDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
    nome: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A cidade não pode ser vazia!' })
    cidade: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A data de admissão não pode ser vazia!' })
    dataAdmissao: Date = new Date();

    @ApiProperty()
    @IsNotEmpty({ message: 'O tipo de participação não pode ser vazio!' })
    tipoParticipacao: string;

    @ApiProperty()
    @IsOptional()
    foto: string;
}