import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Acao extends Document {
    @Prop()
    @IsNotEmpty()
    nome: string;

    @Prop()
    @IsNotEmpty()
    local: string;

    @Prop()
    @IsNotEmpty()
    dataHora: Date = new Date();

    @Prop()
    @IsNotEmpty()
    arrecadacao: string;

    @Prop()
    @IsNotEmpty()
    faixaEtaria: string;

    @Prop()
    @IsNotEmpty()
    observacoes: string;
}

export const AcaoSchema = SchemaFactory.createForClass(Acao);