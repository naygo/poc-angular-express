const express = require('express');
const expressEngine = require('express-engine');
const path = require('path');

const app = express();
const port = 3000;

// Configurando o middleware express-engine
app.engine('html', expressEngine);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Configurando o diretório de arquivos estáticos
const diretorioDist = path.join(__dirname, '..', 'web', 'dist', 'web')
const arquivoHtmlAngular = path.join(__dirname, '..', 'web', 'dist', 'web', 'index.html')

app.use(express.static(diretorioDist));

// Configurando as rotas
app.get('/', (req, res) => {
  res.render('index');
});

// Redirecionando todas as outras rotas para o Angular
app.get('*', (req, res) => {
  res.sendFile(arquivoHtmlAngular);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
