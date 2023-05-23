import express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { resolve } from 'path'
const AppModule = resolve(process.cwd(), '..', 'web', 'src', 'app', 'app.module')

const app = express();

// Set the engine
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppModule, // Give it a module to bootstrap
  }),
);

app.set('view engine', 'html');

app.get('/**/*', (req, res) => {
  res.render('../dist/index', {
    req,
    res,
  });
});

const port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});

