import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateColaboradorDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
    @IsOptional()
    nome: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A cidade não pode ser vazia!' })
    @IsOptional()
    cidade: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A data de admissão não pode ser vazia!' })
    @IsOptional()
    dataAdmissao: Date = new Date();

    @ApiProperty()
    @IsNotEmpty({ message: 'O tipo de participação não pode ser vazio!' })
    @IsOptional()
    tipoParticipacao: string;

    @ApiProperty()
    @IsOptional()
    foto: string;
}
