import * as mongoose from 'mongoose';

export const ColaboradorSchema = new mongoose.Schema(
    {
        nome: String,
        cidade: String,
        dataAdmissao: String,
        tipoParticipacao: String,
        foto: String,
    },
    {
        collection: 'colaboradores'
    }
);