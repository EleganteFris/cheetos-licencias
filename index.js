const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Aquí dentro de las comillas pondrás las llaves de tus compradores
const LLAVES_PERMITIDAS = [
    "COMPRADOR-BUILTBYBIT-1",
    "PRUEBA-TEST-123"
];

app.get('/verificar', (req, res) => {
    const claveCliente = req.query.key;

    if (LLAVES_PERMITIDAS.includes(claveCliente)) {
        return res.send("LICENCIA_VALIDA");
    }
    
    res.status(403).send("LICENCIA_INVALIDA");
});

app.listen(PORT, () => console.log(`Servidor listo`));
