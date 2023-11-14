import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Saida extends Document {
    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    nomeDoador: string;

    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    valor: number;

    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    dataHora: Date = new Date();

    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    documento: string;
}

export const SaidaSchema = SchemaFactory.createForClass(Saida);
