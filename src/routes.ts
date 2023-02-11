// Importa componentes do express
import {Router,Request,Response} from 'express';
import TesteController from './Controller/TesteController';
// Instancia roteador
const Roteador = Router();
// Define rota tipo get que, para funcionar, deve ser requisitada conforme exemplo.3
// Exemplo de requisição: localhost:4000/teste/123?num=456
// Onde 123 e 456 podem ser substituídos por quaisquer valores
Roteador.get(   
        // URL com parêmetro :id    
        '/teste/:id', 
       
        // Função anônima com os parâmetros de tipos Request (requisição) e Response (resposta)     
        (req:Request,res:Response)=> {        
        // obtém query param        
        const x = req.query.num;        
        // obtem route param        
        const y = req.params.id;       
        return res.send(`Resultado: ${Number(x) + Number(y)}`);   
        // Aciona função do TesteController 
        new TesteController().teste1  

    }

);

export default Roteador;