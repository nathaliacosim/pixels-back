import * as mongoose from 'mongoose';

export const SaidaSchema = new mongoose.Schema(
    {
        destino: String,
        valor: Number,
        dataHora: String,
        descricao: String,
        formaPagamento: String
    },
    {
        collection: 'saidas'
    }
);