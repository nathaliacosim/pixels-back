import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateSaidaDto {
    @IsNotEmpty({ message: 'O destino não pode ser vazio!' })
    @ApiProperty()
    destino: string;

    @IsNotEmpty({ message: 'O valor não pode ser vazio!' })
    @ApiProperty()
    valor: number;

    @IsNotEmpty({ message: 'A data/hora não pode ser vazia!' })
    @ApiProperty()
    dataHora: string;

    @IsNotEmpty({ message: 'A descrição não pode ser vazia!' })
    @ApiProperty()
    descricao: string;

    @IsNotEmpty({ message: 'A forma de pagamento não pode ser vazia!' })
    @ApiProperty()
    formaPagamento: string;
}