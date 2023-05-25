const express = require('express');
const expressEngine = require('express-engine');
const path = require('path');

const app = express();
const port = 3000;

// Configurando o middleware express-engine
app.engine('html', expressEngine);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '..', 'web', 'dist', 'aceite')));

// Configurando o diretório de arquivos estáticos
app.get('/teste', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'web', 'dist', 'aceite', 'index.html'));
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
