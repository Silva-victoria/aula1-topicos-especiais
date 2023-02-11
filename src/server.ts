// importa o express
import express from 'express';
import Roteador from './routes';
// instancia o express
const app = express();
// Configuração de uso das rotas
app.use(Roteador);
//configura porta e funçao executada na ativação
app.listen(4000, ()=>{console.log("Servidor Iniciado")} ); //tambem pode ser usado como -> // function(){console.log("Servidor Iniciado")}


