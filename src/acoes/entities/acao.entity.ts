import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Acao extends Document {
    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    nome: string;

    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    local: string;

    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    dataHora: Date = new Date();

    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    arrecadacao: string;

    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    faixaEtaria: string;

    @Prop()
    @IsNotEmpty()
    @ApiProperty()
    observacoes: string;
}

export const AcaoSchema = SchemaFactory.createForClass(Acao);