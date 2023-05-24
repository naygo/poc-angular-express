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
app.use(express.static(path.join(__dirname, 'public')));

// Configurando as rotas
app.get('/', (req, res) => {
  res.render('index');
});

// Redirecionando todas as outras rotas para o Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
