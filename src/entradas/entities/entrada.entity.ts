import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Entrada extends Document {
    @IsNotEmpty({ message: 'O destino não pode ser vazio!' })
    @ApiProperty()
    @Prop()
    destino: string;

    @IsNotEmpty({ message: 'O valor não pode ser vazio!' })
    @ApiProperty()
    @Prop()
    valor: number;

    @IsNotEmpty({ message: 'A data/hora não pode ser vazia!' })
    @ApiProperty()
    @Prop()
    dataHora: string;

    @IsNotEmpty({ message: 'O documento não pode ser vazio!' })
    @ApiProperty()
    @Prop()
    documento: string;

    @IsNotEmpty({ message: 'A descrição não pode ser vazia!' })
    @ApiProperty()
    @Prop()
    descricao: string;

    @IsNotEmpty({ message: 'O comprovante não pode ser vazio!' })
    @ApiProperty()
    @Prop()
    comprovante: string;

    @IsNotEmpty({ message: 'A forma de pagamento não pode ser vazia!' })
    @ApiProperty()
    @Prop()
    formaPagamento: string;
}

export const EntradaSchema = SchemaFactory.createForClass(Entrada);
