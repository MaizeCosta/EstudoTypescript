import express from 'express';
const app = express();
// Permite receber JSON nas requisições
app.use(express.json());
// Rota de teste
app.get('/', (req, res) => {
    res.send('API funcionando!');
});
// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
