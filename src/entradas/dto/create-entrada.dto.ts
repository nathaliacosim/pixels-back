import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateEntradaDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'O nome do doador não pode ser vazio!' })
    nomeDoador: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O valor não pode ser vazio!' })
    valor: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'A dataHora não pode ser vazia!' })
    dataHora: string;
}
