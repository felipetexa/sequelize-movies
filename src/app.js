const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

//middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);


// teste de autenticação \/

// const sequelize = new Sequelize('movies_db', 'root', '12345678', {
//   host: 'localhost',
//   port: '3306',
//   dialect: 'mysql'
// });

// async function authenticate() {
//   try {
//       await sequelize.authenticate();
//       console.log('Conectado com Sucesso.');
//   } catch (error) {
//       console.error('Erro na conexão:', error);
//   }
// }
// authenticate()

//explicação sobre JS assíncrono... é assíncrono quando precisa pedir informações de fora (ex banco de dados)

// const { QueryTypes } = require('sequelize');
// async function getActors(){
//   const actors = await sequelize.query(`SELECT id, first_name, last_name FROM actors`, { type: QueryTypes.SELECT });
//   console.log(actors)
// }

// getActors()

app.listen('3000', () => console.log('Servidor rodando na porta 3000'));