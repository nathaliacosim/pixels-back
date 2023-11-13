import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Acao extends Document {
    @Prop()
    nome: string;

    @Prop()
    local: string;

    @Prop()
    dataHora: Date = new Date();

    @Prop()
    arrecadacao: string;

    @Prop()
    faixaEtaria: string;

    @Prop()
    observacoes: string;
}

export const AcaoSchema = SchemaFactory.createForClass(Acao);