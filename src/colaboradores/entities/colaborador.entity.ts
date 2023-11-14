import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Colaborador extends Document {
    @Prop()
    @IsNotEmpty()
    nome: string;

    @Prop()
    @IsNotEmpty()
    cidade: string;

    @Prop()
    @IsNotEmpty()
    dataAdmissao: Date = new Date();

    @Prop()
    @IsNotEmpty()
    tipoParticipacao: string;

    @Prop()
    @IsNotEmpty()
    foto: string;
}

export const ColaboradorSchema = SchemaFactory.createForClass(Colaborador);