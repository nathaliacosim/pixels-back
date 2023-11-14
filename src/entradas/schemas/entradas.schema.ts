import * as mongoose from 'mongoose';

export const EntradaSchema = new mongoose.Schema(
    {
        nomeDoador: String,
        valor: Number,
        dataHora: String,
        documento: String,
    },
    {
        collection: 'entradas'
    }
);