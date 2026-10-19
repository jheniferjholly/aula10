// //1. Carrega as variáveis do arquivo .env para memoria(process.env)
// require('dotenv').config();

// //2. Importa a função de fabrica 'createclient' do SDK oficial do supabase
// const{ crateclient, createClient }= require('@supabase/supabase-js');

// //3. Resgata as credenciais de dentro do cofre digital(.env)
// const supabaseUrl= process.env.SUPABASE_URL;
// const supabaseKey= process.env.SUPABASE_KEY;

// //4. Validação de segurança: impede que o servidor suba sem as chaves
// if (!supabaseUrl || !supabaseKey) {
//     console.error('x [ERRO CRÍTICO DE SEGURANÇA]: SUPABASE_URL OU SUPABASE_KEY não encontrados no arquivo .env!');
//     console.error('verifique se o arquivo .env está na raiz do projeto e sem espaços ao redor do sinal de =.')
//     process.exit(1);
// };

// //5. Instancia a ponte oficial de comunicação com a nuvem do Supabase 
// const supabase = createClient(supabaseUrl, supabaseKey);
// console.log('OK! [SUPABASE SDK]: ponte de comunicação instancia com segurança!');

// //6. Exporta a instância única para ser reutilizada em rotas e controllers 
// module.exports= supabase;

// Projeto #08: Farmácia & Controle de Receitas
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ [ERRO #08]: Configure SUPABASE_URL e SUPABASE_KEY no arquivo .env!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;

