const express = require('express');
const cors = require('cors');
const aquisicaoRoutes = require('./routes/aquisicaoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');


const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("API Arrais Veículos")
})

app.use('/usuario', usuarioRoutes);
app.use('/aquisicoes', aquisicaoRoutes);

app.listen(8000, () => console.log('Servidor on: http://localhost:8000'));