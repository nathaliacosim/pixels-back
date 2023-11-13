import * as mongoose from 'mongoose';

export const AcoesSchema = new mongoose.Schema(
    {
        nome: String,
        local: String,
        dataHora: String,
        arrecadacao: String,
        faixaEtaria: String,
        observacoes: String
    },
    {
        collection: 'acoes'
    }
);