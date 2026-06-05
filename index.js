const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Aquí dentro de las comillas pondrás las llaves de tus compradores
const LLAVES_PERMITIDAS = [
    "ccac_live_7f8a29b4e13c90d52f6e4a8b71c93a02"
];

app.get('/verificar', (req, res) => {
    const claveCliente = req.query.key;

    if (LLAVES_PERMITIDAS.includes(claveCliente)) {
        return res.send("LICENCIA_VALIDA");
    }
    
    res.status(403).send("LICENCIA_INVALIDA");
});

app.listen(PORT, () => console.log(`Servidor listo`));
