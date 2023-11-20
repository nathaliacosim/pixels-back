import * as mongoose from 'mongoose';

export const SaidaSchema = new mongoose.Schema(
    {
        destino: String,
        valor: Number,
        dataHora: String,
        documento: String,
        descricao: String,
        comprovante: String,
        formaPagamento: String
    },
    {
        collection: 'saidas'
    }
);