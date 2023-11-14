import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Colaborador extends Document {
    @ApiProperty()
    @Prop()
    @IsNotEmpty()
    nome: string;

    @ApiProperty()
    @Prop()
    @IsNotEmpty()
    cidade: string;

    @ApiProperty()
    @Prop()
    @IsNotEmpty()
    dataAdmissao: Date = new Date();

    @ApiProperty()
    @Prop()
    @IsNotEmpty()
    tipoParticipacao: string;

    @ApiProperty()
    @Prop()
    @IsNotEmpty()
    foto: string;
}

export const ColaboradorSchema = SchemaFactory.createForClass(Colaborador);