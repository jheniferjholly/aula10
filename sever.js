// require('dotenv').config();
// const express = require('express');

// // Importa a ponte configurada e segura do Supabase
// const supabase = require('./src/config/supabaseClient');

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 3000;

// // Rota principal de diagnóstico de segurança e conexão
// app.get('/api/status', (req, res) => {
//     // Verifica se o objeto supabase possui os módulos internos carregados
//     const clienteAtivo = Boolean(supabase && supabase.auth && supabase.rest);

//     res.status(200).json({
//         sistema: "API Back-End I - Controle de Acesso",
//         status_servidor: "ONLINE",
//         ponte_supabase_sdk: clienteAtivo ? "CONECTADA" : "FALHA",
//         ambiente: process.env.AMBIENTE_EXECUCAO || "padrao",
//         seguranca_cofre_env: {
//             url_configurada: Boolean(process.env.SUPABASE_URL),
//             chave_protegida_no_cofre: Boolean(process.env.SUPABASE_KEY),
//             chave_exposta_no_codigo: false
//         },
//         mensagem: "Infraestrutura pronta para operações no banco na nuvem!"
//     });
// });

// app.listen(PORT, () => {
//     console.log('====================================================');
//     console.log(`🚀 Servidor Express rodando em: http://localhost:${PORT}`);
//     console.log(`🔍 Teste o status em: http://localhost:${PORT}/api/status`);
//     console.log('🔒 Inspecionando objeto Supabase Client no terminal:');
//     console.log(typeof supabase === 'object' ? 'Objeto Supabase instanciado com sucesso!' : 'Erro ao instanciar');
//     console.log('====================================================');
// });

// Servidor Express - Projeto #08: Farmácia & Controle de Receitas
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3008;

app.get('/api/farmacia/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 8,
        sistema: "Farmácia & Controle de Receitas",
        categoria: "Saúde & Varejo",
        tabela_conectada: process.env.TABELA_ALVO || "lotes_medicamentos",
        parametro_ambiente: process.env.CODIGO_ANVISA_LOJA || "FARMA_SAUDE_808",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #08] Farmácia & Controle de Receitas rodando em http://localhost:${PORT}/api/farmacia/status`);
});